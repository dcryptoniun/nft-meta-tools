import fs from "fs";
import path from "path";

export default function handler(req, res) {
  // const filePath = path.join(process.env.HOME, "Desktop", "metadata", "1.json");
  // const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
  //.json(data)

  const os = require("os");
  const path = require("path");
  const desktopDir = path.join(os.homedir(), "Desktop/metadata/1.json");
  const data = JSON.parse(fs.readFileSync(desktopDir, "utf8"));
  console.log(desktopDir);
  res.status(200).json(data);
}
