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
	game.instance = new Game();
}
game.refresh = function() {
	for (var c = 0; c < game.instance.map.cols; c++) {
		for (var r = 0; r < game.instance.map.rows; r++) {
			var tile = game.instance.map.getTile(c, r);
			if (tile !== 0) { // 0 => empty tile
				game.ctx.drawImage(
					tileAtlas, // image
					(tile - 1) * game.instance.map.tsize, // source x
					0, // source y
					game.instance.map.tsize, // source width
					game.instance.map.tsize, // source height
					c * game.instance.map.tsize, // target x
					r * game.instance.map.tsize, // target y
					game.instance.map.tsize, // target width
					game.instance.map.tsize // target height
				);
			}
		}
	}
}
game.load = function() {
	game.canvas = document.getElementById("screen");
	game.canvas.onclick = function() {click()};
	game.resize()
	game.ctx = game.canvas.getContext('2d');
}
game.start = function() {
}
function Game() {
	var grid = Array(100);
	for (var i = 0; i < 100; i++) {
		grid[i] = Array(100).fill(1);
	}
	for
	var oreX = Math.floor(Math.random() * 100);
	var oreY = Math.floor(Math.random() * 100);
	for (var i = 0; i < (25 + Math.floor(Math.random() * 65); i++) {
		grid[oreY + Math.floor(Math.random() * 10)][oreX + Math.floor(Math.random() * 10)] = '2';
	}
	var map = {
		cols: 100,
		rows: 100,
		tsize: 100,
		tiles: grid,
		getTile: function(x, y) {
			return this.tiles[y][x]
		}
	};
	this.map = map;
	setInterval(game.refresh, 20)
}
