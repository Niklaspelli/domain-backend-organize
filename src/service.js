const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const cookieRoutes = require("./routes/boardRoutes.js");
const boardRoutes = require("./routes/boardRoutes");
const taskRoutes = require("./routes/taskRoutes");
const app = express();


app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(cookieParser());


app.use("/cookie", cookieRoutes);
app.use("/board", boardRoutes);
app.use("/task", taskRoutes);


module.exports = app;
