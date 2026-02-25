class Button {
private label: string;
private onClick: () => void;
private buttonIsHovered: boolean;
private size: p5.Vector
private buttonPos: p5.Vector
private buttonTextPos: p5.Vector

    constructor(label: string, onClick: () => void, buttonIsHovered: boolean, size: p5.Vector, buttonPos: p5.Vector, buttonTextPos: p5.Vector) {
    this.label = label;
    this.onClick = onClick;
    this.buttonIsHovered = buttonIsHovered;
    this.size = createVector(size.x, size.y);
    this.buttonPos = createVector(buttonPos.x, buttonPos.y);
    this.buttonTextPos = createVector(buttonTextPos.x, buttonTextPos.y);
    }

    public update() {
        this.buttonIsHovered = false;
        if (mouseX > this.buttonPos.x && mouseX < this.buttonPos.x + this.size.x &&
            mouseY > this.buttonPos.y && mouseY < this.buttonPos.y + this.size.y) {
            this.buttonIsHovered = true;
            if (mouseIsPressed) {
                this.onClick();
            }
        }
    }

    public draw() {
        push();
    if (this.buttonIsHovered === true) {
        fill("orange");
    } else if (this.buttonIsHovered === false) {
        fill("lightgray");
    }
    
    rect(this.buttonPos.x, this.buttonPos.y, this.size.x, this.size.y);
    fill("black");
    textAlign(LEFT, TOP);
    text(this.label, this.buttonTextPos.x + this.size.x / 2 - textWidth(this.label) / 2, this.buttonTextPos.y + this.size.y / 2 - textSize() / 2);
    pop();
        }
    }
        
    


