function extract_value(s) {
  var nums = "1234567890";
  var out = "";
  for (var i = 0; i < s.length; i++) {
    if (nums.includes(s[i])) {
      out += s[i];
    }
  }
  return out;
}


function cheer(x) {
  var bar = document.getElementById("progressbar_top");
  var progress = parseInt(extract_value(bar.getAttribute("style")));
  progress += x;
  bar.style.width = progress + "%";
  if (progress == 100) {
    alert("WUHU Team Red won");
    create_cheer_reset_button();
  } else if (progress == 0) {
    alert("WUHU Team Green won");
    create_cheer_reset_button();
  }
}

function create_cheer_reset_button() {
  var button = document.createElement('button');
  button.id = "cheer_reset_button";
  button.type = "button";
  button.innerHTML = "reset cheering contest";
  button.className = "btn btn-primary";
 
  button.onclick = function() {
    var bar = document.getElementById("progressbar_top");
    var button = document.getElementById("cheer_reset_button");
    bar.style.width = "50%";
    button.remove();
  };
 
  var where = document.getElementById("button_space");
  where.appendChild(button);
}


function drag(ev) {
  ev.dataTransfer.setData('text', ev.target.id);    // "schreibt position mit"
}

function allowDrop(ev) {
  ev.preventDefault();    // setzt standart aktion aus (Bild springt zurück)
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData('text');
  ev.target.appendChild(document.getElementById(data));
}