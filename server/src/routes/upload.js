const express = require("express");
const router = express.Router();
const fileUpload = require("express-fileupload");
const path = require("path");
const fs = require("fs");

const processPath = require("../path");

router.use(fileUpload());

router.post("/:path?", async (req, res, next) => {
  // Si no se subió ningún archivo
  if (!req.files) {
    return res.status(400).json({
      message: "No se seleccionó ningún archivo",
    });
  }

  const dirPath = processPath(req.params.path);
  let files = req.files[""];

  if (!Array.isArray(files)) {
    files = [files];
  }
  /* 
  // Si ya hay un archivo con ese nombre, cambiarselo a nombre (1).extension
  for await (file of files) {
    if (file.isDirectory)
  } */

  const moveFile = (tempFile, storagePath) => {
    console.log(tempFile);
    return new Promise((res, rej) => {
      tempFile.mv(path.join(storagePath, tempFile.name), (err) => {
        if (err) {
          rej(err);
        } else res();
      });
    });
  };

  try {
    for (const file of files) {
      await moveFile(file, dirPath.absolutePath);
    }
  } catch (err) {
    return next(err);
  }

  res.json({
    message: "El archivo se subió correctamente",
  });
});

module.exports = router;
