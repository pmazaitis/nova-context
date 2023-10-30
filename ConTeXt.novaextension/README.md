**ConTeXt** provides syntax highlighting, autocompletion, and task support for the [ConTeXt](https://www.contextgarden.net) document preparation system.

<!--
🎈 It can also be helpful to include a screenshot or GIF showing your extension in action:
-->

![](https://nova.app/images/en/dark/editor.png)

## Features

This extension supports the following features:

- Syntax Highlighting
- Folding for: preamble, environments, comments, and postamble
- Automatic document hierarchy from heading commands
- Spellchecking in body text, titles, and subtitles
- Compile/Preview/Clean operations on the current file
- Compile/Preview/Clean operations on user-specified project files

Support for:

- Localization
- LSP integration

...is planned for a future update.

## Requirements

To build PDF files, you will need to a `context` binary installed (either stand-alone, or from a TeX distribution). This extension will start a login shell to run the `context` binary: the extension should be able to find the binary if it is within the PATH environment variable for your default login shell. You may also explicitly configure the extension with an absolute path to a specific `context` binary if needed.

The automatically preview compiled PDFs, you will need to install [Skim.app](https://skim-app.sourceforge.io/).

## Usage

Syntax highlighting, folding, document hierarchy, and spellchecking work out of the box.

### Compiling the Current ConTeXt File 

The extension provides a **Compile Current ConTeXt File** task. With this task selected, there are three task actions available for the ConTeXt editor window with focus: Build, Run, and Clean.

The **Build** (⌘B) action in this task will compile the ConTeXt file in the editor window with focus. This action will use the context binary specified in the workspace setting, and fall back to the binary specified in the global setting. 

The **Run** (⌘R) action in this task will preview the PDF file associated with the ConTeXt file in the editor window with focus. This action will honor the configuration under **Skim Options** in the global extension settings. 

The **Clean** action (⇧⌘K) in this task will remove files produced by compilation, as specified under **Clean Options** in the Workspace extension settings (Project > Project Settings... > ConTeXt).

### Generating Custom Tasks for Project Files

The extension also provides a _Task Template_, which can be used to generate tasks for specific source files. This can be useful if you want to compile a master document in a ConTeXt project while editing other source files in the project structure. 

To create a new task dedicated to a specific source file:

1. Click the **Project** menu.
2. Select **Project Settings**.
3. In the left sidebar, click the plus symbol (**+**) next to _Tasks_.
4. Select **Compile ConTeXt Project File**.
5. Enter or browse to the path for the desired source file.

If you leave the **Project file** blank, the task will default to compiling the ConTeXt file in the editor window with focus.

After creating a custom task, it is recommended to rename the task to something meaningful: the name of the file being compiled, or the part of the project structure, etc.
 
Custom tasks can be configured to automatically perform a Build action before a run action. Click the arrow next to the task, select **Run**, and click the **Build before running** option. 

## Configuration

This extension supports global and workspace settings. 

### Global Configuration

To reach the global configuration options:

1. Click the **Extensions...** menu, and select **Extension Library**
2. Select the **ConTeXt** Extension in the side bar
3. Select **Settings**

Under **ConTeXt Options**, you may select the default `context` binary used across the extension. The extension will look for the binary in the PATH environment variable for your default login shell. You may also explicitly configure the extension with an absolute path to a specific `context` binary if needed.

Under **Skim Options**, you may configure the location of `Skim.app` on your system. An absolute bath is recommended.

You may configure how Skim is called when used to preview a PDF. 

Enable **Revert Skim on Run** if you would like to force Skim to reload the file for each preview. This setting is not recommended if youhave Skim configured to detect file changes.

Enable **Keep Skim in Background on Run** to maintain the editor as the top-most window on your screen.

### Workspace Configuration

To reach the workspace configuration options:

1. Click the **Project** menu, and select **Project Settings...**
2. Select **ConTeXt** in the sidebar, under **Extensions** 

Under **ConTeXt Options**, you may select the default `context` binary used within this workspace. This setting will override the global configuration. The extension will look for the binary in the PATH environment variable for your default login shell. You may also explicitly configure the extension with an absolute path to a specific `context` binary if needed.

Under **Clean Options**, you may select which filetypes will be removed when running the **Clean** action for tasks in this workspace. _Warning:_ the clean task will permanently delete the files; it will not stage them into the Trash.




