

// ## Preamble

exports.activate = () => {
  // console.log("Activating ConTeXt");
};

exports.deactivate = () => {
  // console.log("Deactivating ConTeXt");
};

// ## Tasks
// 
// This extension offers a task assistant and a task template.
//
// The task assistant generates a simple task that compiles the ConTeXt file in the current buffer with focus.
//
// The task template offers the user the ability to create a task with a custom, specific file to always use as the compilation source. This is useful in situations where a user wants to re-compile a ConTeXt file after making changes to an environment file, or some other dependancy. 

nova.commands.register(
  "org.mazaitis.context.getFilenameWithoutExt",
  (context) => {
    let editor = TextEditor.isTextEditor(context)
      ? context
      : context.activeTextEditor;
    return nova.path.splitext(editor.document.path)[0];
  }
);

nova.commands.register('org.mazaitis.context.cleanProjectFiles', (workspace) => {
  let stem = nova.path.join(nova.path.dirname(workspace.activeTextEditor.document.path), nova.path.splitext(workspace.activeTextEditor.document.path)[0]);

  if (workspace.config.get("org.mazaitis.context.clean.log")) {
    nova.fs.remove(stem + ".log");
  }
  if (workspace.config.get("org.mazaitis.context.clean.tuc")) {
    nova.fs.remove(stem + ".tuc");
  }
  if (workspace.config.get("org.mazaitis.context.clean.pgf")) {
    nova.fs.remove(stem + ".pgf");
  }
  if (workspace.config.get("org.mazaitis.context.clean.synctex")) {
    nova.fs.remove(stem + ".synctex");
  }
  if (workspace.config.get("org.mazaitis.context.clean.pdf")) {
    nova.fs.remove(stem + ".pdf");
  }
});

function getContext() {
  let ws = nova.workspace.config.get("org.mazaitis.context.path");
  if (ws == "") ws = nova.config.get("org.mazaitis.context.path");
  return ws;
}

function previewInSkim(pdf) {
  const args = [
    "${Config:org.mazaitis.context.skim.path}/Contents/SharedSupport/displayline",
  ];
  if (nova.config.get("org.mazaitis.context.skim.revert")) {
    args.push("-revert");
  }
  if (nova.config.get("org.mazaitis.context.skim.background")) {
    args.push("-background");
  }
  args.push("$LineNumber", pdf, "$File");
  return new TaskProcessAction("/usr/bin/env", {
    args: args,
    env: nova.environment,
  });
}

class ContextTaskProvider {
  static identifier = "org.mazaitis.context.tasks";

  static contextTask(...options) {
    return new TaskProcessAction("/usr/bin/env", {
      args: [getContext(), "--synctex", ...options],
      env: nova.environment,
    });
  }

  genericContextTask() {
    const task = new Task("Compile Current ConTeXt File");
    task.setAction(Task.Build, ContextTaskProvider.contextTask("$File"));
    task.setAction(
      Task.Run,
      previewInSkim(
        "$FileDirname/${Command:org.mazaitis.context.getFilenameWithoutExt}.pdf"
      )
    );
    task.setAction(
      Task.Clean,
      new TaskCommandAction('org.mazaitis.context.cleanProjectFiles', {
        args: []
      })
    );
    return task;
  }

  provideTasks() {
    // Task assistant
    let tasks = [];
    tasks.push(this.genericContextTask());
    return tasks;
  }

  resolveTaskAction(context) {
    // fetch the mainfile from the task configuration (for project files, etc.)
    let mainfile = context.config.get("org.mazaitis.context.mainfile");

    // If not set in the configuration, get the path from the workspace object, if available
    if (mainfile == "" || !mainfile) {
      mainfile = nova.workspace.activeTextEditor.document.path;
    }

    if (mainfile == "" || !mainfile) {
      console.error("[context] unable to determine mainfile!");
      return null;
    }

    if (context.action == Task.Build) {
      return ContextTaskProvider.contextTask("--synctex", mainfile);
    } else if (context.action == Task.Run) {
      return previewInSkim(
        nova.path.join(nova.path.dirname(mainfile), nova.path.splitext(mainfile)[0]) + ".pdf"
      );
    } else if (context.action == Task.Clean) {
      return new TaskCommandAction('org.mazaitis.context.cleanProjectFiles', {
        args: []
      })
    }
  }
}

//Task Assistant
nova.assistants.registerTaskAssistant(new ContextTaskProvider(), {
  identifier: ContextTaskProvider.identifier,
  name: "ConTeXt",
});
