function extract_value(s) {
  var nums = "1234567890";
  var out = ""
  for (var i = 0; i < s.length; i++) {
    if (nums.includes(s[i])) {
      out += s[i]
    }
  }
  return out
}


function button_press(x) {
  var bar = document.getElementById("progressbar_top");
  var progress = parseInt(extract_value(bar.getAttribute("style")));
  bar.style.width = (progress + x) + "%"
}