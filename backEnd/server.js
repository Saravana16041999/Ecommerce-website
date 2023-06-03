import express from "express";
import data from "./data.js";
import mongoose from "mongoose";
import "./userDetials.js";
import bcrypt from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";
import cors from "cors";
import bodyParser from "body-parser";

const jwt = jsonwebtoken;

const JWT_SECRET = "ashtfly903867eydf667luh0*7r5fjo";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
const mongoUrl =
  "mongodb+srv://saravana:CO1oebSZmPzWLkzR@cluster0.61knjmi.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((e) => console.log(e));

const User = mongoose.model("UserInfo");

app.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  const encryptedPassword = await bcrypt.hash(password, 10);
  try {
    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.send({ error: "User Exist" });
    }

    await User.create({
      username,
      email,
      password: encryptedPassword,
    });
    res.send({ status: "ok" });
  } catch (error) {
    res.send({ status: "error" });
  }
});

app.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.send({ error: "User DosNot Exist " });
  }
  if (await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({}, JWT_SECRET);

    if (res.status(201)) {
      return res.json({ status: "ok", data: token });
    } else {
      return res.json({ error: "error" });
    }
  }
  res.json({ status: "error", error: "Invalid Password" });
});

app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.get("/api/products/id/:id", (req, res) => {
  const product = data.products.find((x) => x.id === req.params.id);
  if (product) {
    res.send(product);
  } else {
    res
      .status(404)
      .send({ message: "Product Not Fount or Wrong Page...!! go back!" });
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server started at - port ${port}`);
});
