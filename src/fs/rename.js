import * as fs from "fs/promises";
import { resolve, dirname, join } from "path";
import process from "process";

export async function renameFile(oldPath, newNameFile) {
  const oldFilePath = resolve(process.cwd(), oldPath);
  const newFilePath = join(dirname(oldFilePath), newNameFile);

  try {
    await fs.access(newFilePath);
    console.log(`The file "${newNameFile}" already exists in this folder!`);
  } catch (err) {
    if (err.code !== "ENOENT") {
      console.error("Unexpected error:", err);
      return;
    }
    try {
      await fs.access(oldFilePath);
      await fs.rename(oldFilePath, newFilePath);
      console.log(`The file has been renamed successfully!`);
    } catch (err) {
      if (err.code === "ENOENT") {
        console.error("FS operation failed!");
      } else {
        console.error("Unexpected error during rename:", err);
      }
    }
  }
}
