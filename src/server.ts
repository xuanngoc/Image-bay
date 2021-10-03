import app from "./app";
import cors from 'cors';

app.use(cors());

const server = app.listen(app.get("port"), () => {
  console.log(
      "  App is running at http://localhost:%s in %s mode",
      app.get("port"),
      app.get("env")
      );

});

export default server;
