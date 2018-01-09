function onScriptLoaded(scriptName) {
    console.log("Script loaded: ", scriptName);
}

function addScriptDynamically(scriptUrl, scriptName) {
    var script = document.createElement('script');
    script.src = scriptUrl;
    script.onload = onScriptLoaded(scriptName);
    document.querySelector('body').appendChild(script);
}