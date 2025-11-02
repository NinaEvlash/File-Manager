# File-Manager

**Repository:** [nodejs-assignments → File Manager](https://github.com/AlreadyBored/nodejs-assignments/blob/main/assignments/file-manager/assignment.md)  
**Done:** 02.11.2025  
**Deadline:** 03.11.2025  
**Score:** 330 / 330  

---

## 🎯 Task Description  
Implement a CLI file manager using **Node.js**.  
The application should allow users to navigate the file system, read, create, rename, copy, move, and delete files and directories.  
Additional functionality includes OS information, file hash calculation, compression, and decompression.  
(See the original [assignment](https://github.com/AlreadyBored/nodejs-assignments/blob/main/assignments/file-manager/assignment.md) for full details.)

---

## 🛠 Implemented Features  
- Navigation through the file system (change directories)  
- Reading file contents  
- Creating new files and directories  
- Renaming, copying, and moving files/directories  
- Deleting files and directories  
- Displaying OS and system information  
- Calculating file hash  
- Compressing and decompressing files  
- CLI interface for user commands  
- Error handling and input validation  

---

## 🚀 How to Run  
1. Clone the repository:  
   ```bash
   git clone https://github.com/NinaEvlash/File-Manager.git
   cd File-Manager

## 🧭 Command Reference

Below is the list of all supported commands and their descriptions.

---

### 📁 Navigation & Working Directory (nwd)

| Command | Description |
|----------|-------------|
| `up` | Go upper from current directory (does nothing if you are in the root folder). |
| `cd <path_to_directory>` | Change working directory. Path can be relative or absolute. |
| `ls` | Show the list of files and folders in the current directory.<br>- Folders are listed first, then files.<br>- Items are sorted alphabetically.<br>- Each entry shows its type (file/folder). |

---

### 📄 Basic File Operations

| Command | Description |
|----------|-------------|
| `cat <path_to_file>` | Read file and print its content (using Readable Stream). |
| `add <new_file_name>` | Create an empty file in the current directory. |
| `mkdir <new_directory_name>` | Create a new folder in the current directory. |
| `rn <path_to_file> <new_filename>` | Rename a file (content remains unchanged). |
| `cp <path_to_file> <path_to_new_directory>` | Copy a file (using Readable and Writable Streams). |
| `mv <path_to_file> <path_to_new_directory>` | Move a file (copy + delete original file). |
| `rm <path_to_file>` | Delete a file. |

---

### ⚙️ Operating System Info

| Command | Description |
|----------|-------------|
| `os --EOL` | Show the default system End-Of-Line symbol. |
| `os --cpus` | Show info about CPU cores: model and clock rate (in GHz). |
| `os --homedir` | Show the home directory path. |
| `os --username` | Show the current system username (not the app username). |
| `os --architecture` | Show CPU architecture for which Node.js was compiled. |

---

### 🔐 Hash Calculation

| Command | Description |
|----------|-------------|
| `hash <path_to_file>` | Calculate and print SHA256 hash of the specified file. |

---

### 🗜️ File Compression / Decompression

| Command | Description |
|----------|-------------|
| `compress <path_to_file> <path_to_destination>` | Compress file using Brotli algorithm (Streams API). |
| `decompress <path_to_file> <path_to_destination>` | Decompress file using Brotli algorithm (Streams API). |

---

### 💡 Notes
- Commands are **case-sensitive**.  
- Application exits when you press `Ctrl + C` or enter `.exit`.  
- All paths can be relative or absolute.  
- Invalid commands or paths should trigger error messages (without terminating the app).