class Button {
private label: string;
private onClick: () => void;
private size: p5.Vector
private buttonPos: p5.Vector
private buttonTextPos: p5.Vector

    constructor(label: string, onClick: () => void, size: p5.Vector, buttonPos: p5.Vector, buttonTextPos: p5.Vector) {
    this.label = label;
    this.onClick = onClick;
    this.size = createVector(size.x, size.y);
    this.buttonPos = createVector(buttonPos.x, buttonPos.y);
    this.buttonTextPos = createVector(buttonTextPos.x, buttonTextPos.y);
    }

    draw() {
        text(this.label, this.buttonTextPos.x + 10, this.buttonTextPos.y + 20);
        textSize(16);
        textAlign(LEFT, TOP);
        rect(this.buttonPos.x, this.buttonPos.y, this.size.x, this.size.y);
        fill("orange");
    }
    
}