class Menu {
private game: Game;
private menuItems: string[];
constructor(){
this.menuItems = ["Start Game", "Controls"];
}

public draw() {
fill(0, 0, 0);

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
this.drawControls();
});
}
}
}

public update() {
this.draw();
}

public drawControls(){
rect(50, 50, 300, 200);
textSize(16);
fill(255);
text("Controls:", 70, 80);
text("W - Move Up", 70, 110);
text("A - Move Left", 70, 140);
text("S - Move Down", 70, 170);
text("D - Move Right", 70, 200);
}

public startGame(){}
}
