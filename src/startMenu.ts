class StartMenu {
private game: Game;
private menuItems: string[];
private levelFactory: LevelFactory;


constructor(){
this.menuItems = ["Start Game", "Controls"];
this.levelFactory = new LevelFactory();
this.createButtons();
}

private createButtons() {
for (let item of this.menuItems) {
let menuButton = document.createElement("button");
menuButton.classList.add("menu-button");
menuButton.textContent = item;
document.body.appendChild(menuButton);
if (item === "Start Game") {
menuButton.addEventListener("click", () => {
this.startGame();
})} else if (item === "Controls") {
menuButton.addEventListener("click", () => {
this.drawControls();});
}
}
};

public draw() {
}

public update() {
this.draw();
}

public drawControls(){
push();
rect(50, 50, 300, 200);
textSize(16);
fill(0, 0, 0);
text("Controls:", 70, 80);
text("W - Move Up", 70, 110);
text("A - Move Left", 70, 140);
text("S - Move Down", 70, 170);
text("D - Move Right", 70, 200);
pop();
}

public startGame(){
    this.levelFactory.draw();
}
}
