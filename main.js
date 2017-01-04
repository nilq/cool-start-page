var CURSOR_BLINK_TIME = 600;

var searchText  = document.getElementById("searchText");
var cursor      = document.getElementById("cursor");
var linkFolders = document.getElementsByClassName("linkFolder");

for (var i = 0; i < linkFolders.length; i++) {
	var lf = linkFolders[i];
	lf.addEventListener("mouseup", function() {
		var links = lf.dataset.links.split(",");
		for (var j = 1; j < links.length; j++) {
			window.open(links[j], j+1);
		}
		location.href = links[0];
	});
}

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