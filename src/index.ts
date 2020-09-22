import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import passport from "passport";

import homepageRouter from "./Routes/Homepage";

const app = express();
const port = 8080 || process.env.PORT;

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());
app.use("/homepage", homepageRouter);

app.get("/", (req, res) => {
  res.send("Hi!");
});

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);
});
