import express, { Application, Request, Response } from 'express'
import {Generator} from "./processing/Generator"

const app: Application = express()

let port: number
process.env.NODE_ENV == 'development' ? port = 3000 : port = 80

app.get('/generate', (req: Request, res: Response) => {
  const text: string = req.query.txt as string;

  const bufferImage: Buffer = new Generator(text).toBuffer();
  res.end(bufferImage, 'binary');
})

app.listen(port, function () {
    console.log(`App is listening on port ${port} !`)
})

export default app;
