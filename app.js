let express = require("express");
let mongoose = require("mongoose");
let cors = require("cors");
let stockRouter = require("./routes/stock");
let PORT = process.env.PORT || 5000;
let app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

mongoose.set("useFindAndModify", false);
mongoose.set("useNewUrlParser", true);
mongoose.set("useUnifiedTopology", true);
mongoose.set("useCreateIndex", true);
mongoose.connect(process.env.MONGO_URI, (err) => {
  console.log("mongodb connected ?", err ? false : true);
});

app.use("/api/stocks", stockRouter);

//error handler
app.use(function (_req, _res, next) {
  next(createError(404));
});

app.use(function (err, _req, res, _next) {
  console.log("in error handler");
  // set locals, only providing error in development
  //   res.locals.message = err.message;
  //   res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500);
  res.json({
    error: err,
  });
  //   if (process.env.NODE_ENV === "developemnt") {
  //     res.json({
  //       error: err,
  //     });
  //   }
});

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
