var game = {};
game.load = function() {
	game.resize()
	game.toggleFullScreen()
}
game.resize = function() {
	game.canvas = document.getElementById("screen");
	game.canvas.width = document.body.clientWidth;
	game.canvas.height = document.body.clientHeight;
}
game.click = function() {
}
game.toggleFullscreen = function() {
	let elem = document.body;
	if (!document.fullscreenElement) {
		elem.requestFullscreen().catch(err => {
			alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
		});
	} 
	else {
		document.exitFullscreen();
	}
}
game.refresh = function() {
	const gl = canvas.getContext("webgl");
	if (gl === null) {
		alert("Unable to initialize WebGL. Your browser or machine may not support it.");
		return;
	}
	gl.clearColor(0.0, 0.0, 0.0, 1.0);
	gl.clear(gl.COLOR_BUFFER_BIT);
}
