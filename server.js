const Express = require("express");
const Mongoose = require("mongoose");
const url = "mongodb://localhost/UserDB";
const UserRouter = require("./routers/UserRouter");
const Cors = require("cors");

/////////DataBase Connectivity ////////////

Mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}); //connetor
Mongoose.connection.on("open", () =>
  console.log("DB CONNECTED AND HANDLE READY")
); //handle

/////////////Router part///////////////////

const app = Express();

app.listen(3001, () => console.log("SERVER STARTED AT 3001"));

app.use(Cors());

app.use(Express.json());
app.use("/user", UserRouter);
