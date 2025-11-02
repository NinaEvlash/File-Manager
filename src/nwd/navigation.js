import path from "path";
import { chdir, cwd } from "process";
import fs from "fs";

export function goUP() {
  const currentDir = process.cwd();
  const parentDir = path.dirname(currentDir);

  if (currentDir === parentDir) {
    console.log("You are in the root directory!");
    return;
  } else {
    chdir(parentDir);
  }
}

export function goToDir(pathToDir) {
  let newPath;
  if (path.isAbsolute(pathToDir)) {
    newPath = pathToDir;
  } else {
    newPath = path.resolve(process.cwd(), pathToDir);
  }

  if (fs.existsSync(newPath) && fs.statSync(newPath).isDirectory()) {
    chdir(newPath);
  } else {
    throw new Error("Invalid path!");
  }
}
