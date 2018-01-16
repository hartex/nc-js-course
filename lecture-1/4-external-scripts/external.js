function onScriptLoaded(scriptName) {
    console.log("Script loaded: ", scriptName);
}

function addScriptDynamically(scriptUrl, scriptName) {
    var script = document.createElement('script');
    script.src = scriptUrl;
    script.onload = onScriptLoaded(scriptName);
    document.body.appendChild(script);
}