const { shell, ipcMain } = require("electron");
const ipc = require("electron").ipcRenderer;
const os = require('os');
const userName = os.userInfo().username;

document.getElementById("close-button").addEventListener("click", () => {
    ipc.send("quit")
}

document.getElementById("zzz").addEventListener("click", () => {
	ipc.send("quit")
}
