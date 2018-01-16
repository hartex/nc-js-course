function loadScript() {
  var script = document.createElement('script');
  script.src = 'https://code.jquery.com/jquery-3.2.1.js';
  script.onload = function () {
    console.log('jQuery loaded successfully');
  }

  document.body.appendChild(script);
}

function loadImg() {
  var img = document.createElement('img');
  img.src = "https://i.imgur.com/p6UZVJx.jpg";
  img.onload = function () {
    console.log('Harold loaded successfully');
  }

  document.body.appendChild(img);
}