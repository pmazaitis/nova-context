exports.activate = () => {
  console.log("Activating ConTeXt");
};

exports.deactivate = () => {
  console.log("Deactivating ConTeXt");
};

nova.commands.register(
  "org.mazaitis.context.getFilenameWithoutExt",
  (context) => {
    let editor = TextEditor.isTextEditor(context)
      ? context
      : context.activeTextEditor;
    return nova.path.splitext(editor.document.path)[0];
  }
);

function getContext() {
  let ws = nova.workspace.config.get("org.mazaitis.context.path");
  if (ws == "") ws = nova.config.get("org.mazaitis.context.path");
  return ws;
}

function displayLine(pdf) {
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
    const task = new Task("Current ConTeXt File");
    task.setAction(Task.Build, ContextTaskProvider.contextTask("$File"));
    task.setAction(
      Task.Run,
      displayLine(
        "$FileDirname/${Command:org.mazaitis.context.getFilenameWithoutExt}.pdf"
      )
    );
    return task;
  }

  provideTasks() {
    let tasks = [];
    tasks.push(this.genericContextTask());
    return tasks;
  }

  resolveTaskAction(context) {
    const mainfile = context.config.get("org.mazaitis.context.mainfile");
    if (!mainfile) {
      console.error("[context] no file specified in task settings!");
      return null;
    }
    if (context.action == Task.Build) {
      return ContextTaskProvider.contextTask("--synctex", mainfile);
    } else if (context.action == Task.Run) {
      return displayLine(
        nova.path.join(
          nova.path.dirname(mainfile),
          nova.path.splitext(mainfile)[0]
        ) + ".pdf"
      );
    } else if (context.action == Task.Clean) {
      console.info("[ConTeXt] Clean task handler activated.");
    }
  }
}

nova.assistants.registerTaskAssistant(new ContextTaskProvider(), {
  identifier: ContextTaskProvider.identifier,
  name: "ConTeXt",
});
