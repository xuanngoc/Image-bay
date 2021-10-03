import app from "./app";
import cors from 'cors';


const options: cors.CorsOptions = {
  allowedHeaders: [
    'Origin',
    'X-Requested-With',
    'Content-Type',
    'Accept',
    'X-Access-Token',
  ],
  credentials: true,
  methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
  origin: '*',
  preflightContinue: false,
};

app.use(cors(options));

const server = app.listen(app.get("port"), () => {
  console.log(
      "  App is running at http://localhost:%s in %s mode",
      app.get("port"),
      app.get("env")
      );

});

export default server;
