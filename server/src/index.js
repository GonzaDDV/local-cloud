require("dotenv").config();

const express = require("express");
const cors = require("cors");

const getDirectory = require("./routes/getDirectory");
const newDirectory = require("./routes/newDirectory");
const uploadFile = require("./routes/upload");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => res.send("Bienvenido a la nube local"));

app.use("/content", getDirectory);
app.use("/mkdir", newDirectory);
app.use("/upload", uploadFile);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server iniciado en el puerto ${PORT}`);
});
