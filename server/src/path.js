const path = require("path");
const storage = process.env.STORAGE_PATH;

const slash = process.platform === "win32" ? "\\" : "/";

const procesarPath = (urlPath) => {
  const relativePath = urlPath ? urlPath : slash;
  const absolutePath = path.join(storage, relativePath);

  return { relativePath, absolutePath };
};

module.exports = procesarPath;
