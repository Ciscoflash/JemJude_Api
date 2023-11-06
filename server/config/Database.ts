import mongoose, { ConnectOptions } from "mongoose";
import dotenv from "dotenv";
dotenv.config();
function connect() {
  mongoose
    .connect(
      process.env.dbUrl as string,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      } as ConnectOptions
    )
    .then((connection) => {
      console.log("connected to database");
    })
    .catch((error) => {
      console.log(error);
      return console.log({ message: "Error connecting to database" });
    });
}
export default connect;
