var CURSOR_BLINK_TIME = 600;

var searchText = getE("searchText");
var cursor     = getE("cursor");

var searchValue = "";
var typing = false;

setInterval(function() {
	if (typing) cursor.style.display = "inline";
	else cursor.style.display = cursor.style.display == "none" ? cursor.style.display = "inline" : cursor.style.display = "none";
}, CURSOR_BLINK_TIME);


document.body.addEventListener("keydown", function(e) {
	typing = true;
	var keyCode = e.key;

  	if (keyCode == "Enter") {
	    location.href = "https://google.co.uk/#q="+encodeURIComponent(searchValue);
	    return;
	} else if (keyCode == "Backspace") {
		searchValue = searchValue.substring(0, searchValue.length-1)
  	} else if (keyCode.length == 1) {
		searchValue += keyCode;
	}
	searchText.innerText = searchValue;
});

document.body.addEventListener("keyup", function(e) {
	typing = false;
});

function getE(name) {
	return document.getElementById(name);
}
