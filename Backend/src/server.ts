import app from "./app";
import { AppDataSource } from "./data-source";

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected!");
    app.listen(3000, () => {
      console.log("Server is running!");
    });
  })
  .catch((error) => {
    console.log(error);
  });
