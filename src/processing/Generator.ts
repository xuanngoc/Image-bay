import * as Canvas from "canvas"

export class Generator {
  DEFAULT_TEXT = 'N';
  private canvas: Canvas.Canvas;
  private text: string;

  constructor(text: string){
    this.canvas = Canvas.createCanvas(200, 200);
    text == null ? this.text = this.DEFAULT_TEXT : this.text = text;
  }

  private draw() {
    const context: Canvas.NodeCanvasRenderingContext2D = this.canvas.getContext("2d");


    context.beginPath();
    context.rect(0, 0, 200, 200);
    context.fillStyle = "#fa8231";
    context.fill();

    context.beginPath();
    context.font = "150px Comic Sans MS";
    context.textAlign = "center";
    context.fillStyle = "#fed330";
    context.fillText(this.text, this.canvas.width/2, this.canvas.height/2 + 50);
  }

  public toBuffer(): Buffer {
    this.draw();
    return this.canvas.toBuffer();
  }
}
