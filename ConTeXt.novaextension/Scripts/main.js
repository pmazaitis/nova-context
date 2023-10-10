

// Wraps the current editor selection in a new tag, with placeholders
nova.commands.register("compileCurrentFile", (editor) => {
    // console.clear()
    console.log('Compile Current File');
    
    let ctx_file = nova.workspace.activeTextEditor.document.uri;
    
    console.log('Current file is ' + ctx_file);
    
});