# Nova ConTeXt Extension

## Description

This is an extension for Panic's [Nova Text Editor](https://nova.app/) to support the [ConTeXt](https://www.contextgarden.net) document preparation system.

This extension supports:

- Syntax highlighting
- ConTeXt environment folding
- Presentation of document structure based on heading commands
- Selective spellchecking (body text and heading titles/subtitles)
- Task (Build, Preview, and Clean) for the document under focus
- Per-project tasks (Build, Preview, and Clean) for main project files

## Installation

This extension can be installed via the [Extensions Library](https://extensions.panic.com/), or by adding the extention locally. Install the extension locally by double clicking a local copy of the extension package.

## Use

For more information about how to use the Extension, please see [the Extension README.md](https://github.com/pmazaitis/nova-context/tree/main/ConTeXt.novaextension#readme).

## Contributing

New features and updates cheerfully considered via pull request. 

Bug reports cheerfully accepted. Please use issues to report bugs. Please include as much as possible to make the bug approachable in the report: minimal examples, logs, and especially expectations are all helpful.



## Caveats

### Bugs

Might be a few! :)

### Limitations

For the moment, this extension does not have a good way to play nicely with other extensions that handle `.tex` files. 

## Support

If you have a feature request, [please raise a GitHub issue with your question using the feature request template](https://github.com/pmazaitis/nova-context/issues/new?assignees=&labels=&projects=&template=feature_request.md&title=).

If you have a bug report, [please raise a GitHub issue using the bug report template](https://github.com/pmazaitis/nova-context/issues/new?assignees=&labels=&projects=&template=bug_report.md&title=). Anything that you can offer to make the bug reproducible and/or understandable is gratefully accepted.

_I am a hobbyist software developer._ I want to improve this software, but I can't guarantee that I will always have the time and energy to do so. Best efforts, and onward!

## Credits

This extension was inspired by the excellent [TeX Suite](https://github.com/flyx/Nova-TeX-Suite) extension by Felix Krause. I developed this extension to leverage the [ConTeXt tree-sitter parser](https://github.com/pmazaitis/tree-sitter-context) - I don't know of any way for a single extension to support switching between parsers based on chosen format.

## License

MIT License (https://opensource.org/licenses/MIT)

Copyright 2023 Paul Mazaitis

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.