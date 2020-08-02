const express = require("express");
const router = express.Router();

const processPath = require("../path");

const fs = require("fs");

router.get("/:path?", async (req, res, next) => {
  //  Mostrar las carpetas y archivos en el directorio actual
  try {
    const pathDirectorio = processPath(req.params.path);
    const directorio = await fs.promises.opendir(pathDirectorio.absolutePath);

    let content = { archivos: [], directorios: [] };

    for await (const dir of directorio) {
      if (dir.isDirectory()) {
        content.directorios.push(dir.name);
      } else {
        content.archivos.push(dir.name);
      }
    }

    content.archivos.sort((a, b) => a + b);
    content.directorios.sort((a, b) => a + b);

    res.json({
      path: pathDirectorio.relativePath,
      content,
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
