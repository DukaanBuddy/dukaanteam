const express = require("express");
const cors = require("cors");
const compression = require("compression");
require("./connection/connection")();
const routes = require("./routes/index.route");
// const UserRouter=require("./routes/user.route")
const { errorHandler } = require("./middlewares/error.middleware");
const userRouter = require("./routes/user.route");
const sellRouter = require("./routes/sell.route");
const buyRouter = require("./routes/buy.route");

const app = express();

const PORT = process.env.PORT || 8000;
var corsOptions = {
  origin: "*" || "http://localhost:3000",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json({ limit: "50mb" }));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

app.use(express.static(__dirname + "/public/uploads/"));

app.use(compression());

//routes
app.get("", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.use("/api/v1/user", userRouter);
app.use("/api/v1/customer", routes.customer);
app.use("/api/v1/employee", routes.employee);
app.use("/api/v1/expense", routes.expenses);
app.use("/api/v1/inventory", routes.inventory);
app.use("/api/v1/task", routes.tasks);
app.use("/api/v1/vendor", routes.vendors);
app.use("/api/v1/sell", sellRouter);
app.use("/api/v1/buy", buyRouter);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
