var Loader = {
	images: {}
};
Loader.loadImage = function (key, src) {
	var img = new Image();
	var d = new Promise(function (resolve, reject) {
		img.onload = function () {
			this.images[key] = img;
			resolve(img);
		}.bind(this);
		img.onerror = function () {
			reject('Could not load image: ' + src);
		};
	}.bind(this));
	img.src = src;
	return d;
};
Loader.getImage = function (key) {
	return (key in this.images) ? this.images[key] : null;
};
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
	window.requestAnimationFrame(game.refresh)
	for (var c = 0; c < game.instance.map.cols; c++) {
		for (var r = 0; r < game.instance.map.rows; r++) {
			var tile = game.instance.map.getTile(c, r);
			if (tile !== 0) { // 0 => empty tile
				game.ctx.drawImage(
					game.tileAtlas, // image
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
var load = function () {
	return [
		Loader.loadImage('tiles', 'https://lvoz2.github.io/Orez/images/tiles.png'),
	];
}
game.load = function() {
	game.canvas = document.getElementById("screen");
	game.canvas.onclick = function() {click()};
	game.resize()
	game.ctx = game.canvas.getContext('2d');
	var p = load();
	Promise.all(p).then(function (loaded) {
		this.init();
	}.bind(this));
}
game.init = function() {
	game.tileAtlas = Loader.getImage('tiles');
}
game.start = function() {
}
function Game() {
	var grid = Array(100);
	for (var i = 0; i < 100; i++) {
		grid[i] = Array(100).fill(1);
	}
	for (var b = 0; b < 10; b++) {
		var oreX = 5 + Math.floor(Math.random() * 80);
		var oreY = 5 + Math.floor(Math.random() * 80);
		for (var i = 0; i < (25 + Math.floor(Math.random() * 65)); i++) {
			grid[oreY + Math.floor(Math.random() * 10)][oreX + Math.floor(Math.random() * 10)] = 2;
		}
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
	window.requestAnimationFrame(game.refresh);
}
game.genGame = function(x, y, direction) {
	var grid = Array(100);
	for (var i = 0; i < 100; i++) {
		grid[i] = Array(100).fill(1);
	}
	for (var b = 0; b < 10; b++) {
		var oreX = 5 + Math.floor(Math.random() * 80);
		var oreY = 5 + Math.floor(Math.random() * 80);
		for (var i = 0; i < (25 + Math.floor(Math.random() * 65)); i++) {
			grid[oreY + Math.floor(Math.random() * 10)][oreX + Math.floor(Math.random() * 10)] = 2;
		}
	}
	if (direction == 'right') {
		for (var a = 0; a < 100; a++) {
			for (var f = 0; f < grid[a].length; f++) {
				game.instance.map.tiles[(y * 100) + a].push(grid[a][f])
			}
		}
	}
	if (direction == 'down') {
		for (var a = 0; a < 100; a++) {
			game.instance.map.tiles[(a + y)*100].push(grid[a])
		}
	}
}
