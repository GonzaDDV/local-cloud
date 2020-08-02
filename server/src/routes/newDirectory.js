const express = require("express");
const router = express.Router();

const processPath = require("../path");

const path = require("path");
const fs = require("fs");

router.post("/:path?", async (req, res, next) => {
  const dirPath = processPath(req.params.path);
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({
      message: "No se especificó ningún nombre de directorio",
    });
  }

  try {
    await fs.promises.mkdir(path.join(dirPath.absolutePath, name));
    res.json({
      message: "El directorio se creó correctamente",
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
