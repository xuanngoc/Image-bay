import express, { Application, Request, Response } from 'express'
import {Generator} from "./processing/Generator"

const app: Application = express()

const port: number | string = process.env.PORT || 3000

app.set("port", port);

app.get('/generate', (req: Request, res: Response) => {
  const text: string = req.query.txt as string;

  const bufferImage: Buffer = new Generator(text).toBuffer();
  res.end(bufferImage, 'binary');
})

export default app;
