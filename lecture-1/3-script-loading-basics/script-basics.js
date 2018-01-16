/**
 * script tag can be embedded in any place of a document
 */
var script = document.createElement('script');
script.innerHTML = 'alert("hello world")';
document.body.appendChild(script);
