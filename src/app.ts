import express, { Application, Request, Response } from 'express'
import {Generator} from "./processing/Generator"

const app: Application = express()

const port: number | string = process.env.PORT || 3000

app.set("port", port);

app.get('/', (req: Request, res: Response) => {
  res.send("<h1 style='text-align: center; margin-top: 100px'>IMAGE BAY</h1>");
});

app.get('/generate', (req: Request, res: Response) => {
  const text: string = req.query['txt'] as string;
  const backgroundColor: string = req.query['bgColor'] as string;
  const textColor: string = req.query['txtColor'] as string;


  const bufferImage: Buffer = new Generator(text, backgroundColor, textColor).toBuffer();
  res.end(bufferImage, 'binary');
})

export default app;
