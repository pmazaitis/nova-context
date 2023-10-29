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


### Generating Custom Tasks for Project Files

The extension also provides a _Task Template_, which can be used to generate tasks for specific source files.

## Configuration

This extension supports global and workspace settings. 

### Global Configuration

1. Extensions... > Extension Library
2. Select the **ConTeXt** Extension in the side bar
3. Select **Settings**





### Workspace Configuration










