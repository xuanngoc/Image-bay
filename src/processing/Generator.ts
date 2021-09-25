import * as Canvas from "canvas";
export class Generator {
  static DEFAULT_TEXT = 'N';
  private canvas: Canvas.Canvas;
  private text: string;
  private backgroundColor: string;
  private textColor: string;

  constructor( text: string = Generator.DEFAULT_TEXT, backgroundColor: string = "#fa8231", textColor: string = "blue") {

    this.canvas = Canvas.createCanvas(200, 200);
    this.text = text;
    this.backgroundColor = backgroundColor;
    this.textColor = textColor;

    this.registerFonts();
  }

  private draw() {
    const context: Canvas.NodeCanvasRenderingContext2D = this.canvas.getContext("2d");

    // Draw background
    context.beginPath();
    context.rect(0, 0, 200, 200);
    context.fillStyle = this.backgroundColor;
    context.fill();

    // Draw text
    context.beginPath();
    context.font = `150px Bebas`;
    context.textAlign = "center";
    context.fillStyle = this.textColor;
    context.fillText(this.text, this.canvas.width / 2 , this.canvas.height / 2 + 50);
  }

  public toBuffer(): Buffer {
    this.draw();
    return this.canvas.toBuffer();
  }

  private registerFonts() {
    Canvas.registerFont('./src/public/fonts/Bebas-Regular.ttf', {family: "Bebas"})

  }
}
