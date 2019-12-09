function create() {
  this.add.text(50, 100, "The adventures of\nAnorak", { font: "40px Arial", fill: "#ffa0d0"});

  this.add.text(130, 300, "by DPW Video Game Designs", { font: "20px Arial", fill: "#ffa0d0"});
}

const config = {
	type: Phaser.AUTO,
	width: 450,
	height: 600,
	backgroundColor: "#5f2a55",
	scene: {
    create
	}
};

const game = new Phaser.Game(config);
