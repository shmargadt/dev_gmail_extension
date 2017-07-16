function refresh(f) {
  if ((/in/.test(document.readyState)) || (typeof Gmail === undefined)) {
    setTimeout('refresh(' + f + ')', 10);
  } else {
    f();
  }
}

var initializerubikBottomBar = function () {
  gmail = new Gmail();
  gmail.observe.on("load", function () {
      initializeComposeTriggers();
  });
}


var initializeComposeTriggers = function () {
  //Initialize when open compose window. 
  gmail.observe.on("compose", function (id, url, body, xhr) {
    loadBottomBar();
  });

  gmail.observe.before('send_message', function (url, body, data, xhr) {
    if( xhr.xhrParams.body_params.body.indexOf("bad") != -1) {
      alert("Always look on the bright side of life");
      window.open('https://www.youtube.com/watch?v=jHPOzQzk9Qo');
      xhr.abort();
    }
  
  });
}


var buildBottomBar = function () {
  //Create the internal bottom panel
  var bottom_bar_internal = document.createElement("div");
  bottom_bar_internal.id = 'bottom-bar-internal';

  //Create the eatngage btn
  var extension_add_btn = document.createElement("div");
  extension_add_btn.id = 'rubik-bar-add-btn';
  extension_add_btn.innerText = "Add Invitation"
  extension_add_btn.onclick = print;
  bottom_bar_internal.appendChild(extension_add_btn);

  //Create the rubik icon
  var rubik = document.createElement("img");
  rubik.id = 'rubik-bar';
  rubik.src = 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Rubik%27s_cube.svg';
  rubik.alt = "rubik-bar";
  bottom_bar_internal.appendChild(rubik);

  //Create the separate line
  var separate_line = document.createElement("div");
  separate_line.id = 'separate-line';
  bottom_bar_internal.appendChild(separate_line);

  return bottom_bar_internal;
}

var loadBottomBar = function () {
  //Create the bottom wrapper and build the bottom inside.
  bottom_bar_classes = document.getElementsByClassName('aDh');
  bottom_bar = document.getElementsByClassName('aDh')[bottom_bar_classes.length - 1];
  bottom_bar.id = 'bottom-bar';
  var rubik_bar = document.createElement("div");
  rubik_bar.id = 'rubik-bar';
  rubik_bar.appendChild(buildBottomBar());
  var hasChild = bottom_bar.querySelector("#rubik-bar") != null;
  if (hasChild) { return; }
  bottom_bar.insertBefore(rubik_bar, bottom_bar.firstChild);
}

refresh(initializerubikBottomBar);