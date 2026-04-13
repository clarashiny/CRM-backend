require('dotenv').config();   // ✅ FIRST LINE

const express = require("express");
const app = express();
const cors = require('cors');

const ConnectDB = require("./config/db");
const UserRoute = require("./view/UserRoutes");

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT;

ConnectDB();

app.use("/users", UserRoute);

app.get("/", (req, res) => {
    res.end("Hello");
});

app.listen(PORT, () =>
    console.log("Server is running", PORT)
);