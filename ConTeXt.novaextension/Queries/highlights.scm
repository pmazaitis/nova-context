; highlights.scm for tree-sitter-context, Nova Extension


[
(content_start)
(content_end)
] @keyword.construct

(text) @meta.text
(title_setting (value (value_brace_group (value_brace_group_text) @meta.text))) 
(subtitle_setting (value (value_brace_group (value_brace_group_text) @meta.text))) 

[
(preamble)
(postamble)
(project_command)
(product_command)
(environment_command) 
] @declaration

[
(command_name)
(start_environment_name)
(stop_environment_name) 
] @identifier.function

[
(settings_block)
(option_block) 
] @identifier.argument

(line_comment) @comment

(escaped) @value.entity

(inline_math) @operator