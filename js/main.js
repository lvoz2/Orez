var game = {};
game.resize = function() {
	game.canvas.width = document.body.clientWidth;
	game.canvas.height = document.body.clientHeight;
}
game.click = function() {
}
game.refresh = function() {
	const gl = game.canvas.getContext("webgl");
	if (gl === null) {
		alert("Unable to start game. Make sure your browser or machine supports WebGL.");
		return;
	}
	gl.clearColor(0.0, 0.0, 0.0, 1.0);
	gl.clear(gl.COLOR_BUFFER_BIT);
}
game.load = function() {
	game.canvas = document.getElementById("screen");
	game.resize()
	setInterval(game.refresh, 10);
}
