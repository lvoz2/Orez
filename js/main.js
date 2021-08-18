var game = {};
game.resize = function() {
	game.canvas.width = document.body.clientWidth;
	game.canvas.height = document.body.clientHeight;
}
document.onmousemove = function(e) {
	var event = e || window.event;
	window.mouseX = event.clientX;
	window.mouseY = event.clientY;
}
game.click = function() {
}
game.loadGame = function() {
}
game.newGame = function() {
	game.canvas.requestPointerLock = game.canvas.requestPointerLock ||
		game.canvas.mozRequestPointerLock;

	document.exitPointerLock = document.exitPointerLock ||
		document.mozExitPointerLock;
	game.canvas.requestPointerLock()
	
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
	game.canvas.onclick = function() {click()};
	game.resize()
	setInterval(game.refresh, 20);
}
game.start = function() {
}
