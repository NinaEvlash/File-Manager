import fs from "fs";
import path from "path";

export function listDir() {
  const currentDir = process.cwd();
  const items = fs.readdirSync(currentDir, { withFileTypes: true });

  const arrfolders = [];
  const arrfiles = [];

  for (const item of items) {
    if (item.isDirectory()) {
      arrfolders.push({ Name: item.name, Type: "directory" });
    } else if (item.isFile()) {
      arrfiles.push({ Name: item.name, Type: "file" });
    }
  }
  arrfolders.sort((a, b) => a.Name.localeCompare(b.Name));
  arrfiles.sort((a, b) => a.Name.localeCompare(b.Name));

  console.table([...arrfolders, ...arrfiles]);
}
