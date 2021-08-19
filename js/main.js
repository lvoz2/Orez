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
	for (var c = 0; c < map.cols; c++) {
		for (var r = 0; r < map.rows; r++) {
			var tile = map.getTile(c, r);
			if (tile !== 0) { // 0 => empty tile
				game.ctx.drawImage(
					tileAtlas, // image
					(tile - 1) * map.tsize, // source x
					0, // source y
					map.tsize, // source width
					map.tsize, // source height
					c * map.tsize, // target x
					r * map.tsize, // target y
					map.tsize, // target width
					map.tsize // target height
				);
			}
		}
	}
}
game.load = function() {
	game.shapesX = {0: [0, -1, 0, +1, -2, -1, 0, +1, +2, -3, -2, -1, 0, +1, +2, +3, -2, -1, 0, +1, +2, -1, 0, +1, 0], 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: []};
	game.shapesY = {0: [+3, +2, +2, +2, +1, +1, +1, +1, +1, 0, 0, 0, 0, 0, 0, 0, -1, -1, -1, -1, -1, -2, -2, -2, -3], 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: []};
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
		grid[i] = Array(100).fill(0);
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
	var oreX = Math.floor(Math.random() * 100);
	var oreY = Math.floor(Math.random() * 100);
	var shapeNo = Math.floor(Math.random() * 1);
	for (var i = 0; i < game.shapesY[shapeNo].length; i++) {
		grid[oreY + game.shapesY[shapeNo][i]][oreX + game.shapesX[shapeNo][i]] = 'iron';
	}
	this.grid = grid;
	setInterval(game.refresh, 20)
}
