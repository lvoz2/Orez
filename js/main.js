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
	game.ctx.fillStyle = '#efefef';
	game.ctx.fillRect(0, 0, game.canvas.width, game.canvas.height);
}
game.load = function() {
	game.canvas = document.getElementById("screen");
	game.canvas.onclick = function() {click()};
	game.resize()
	game.ctx = game.canvas.getContext('2d');
	setInterval(game.refresh, 20);
}
game.start = function() {
}
