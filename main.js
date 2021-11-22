// main.js

const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
const ipc = require("electron").ipcRenderer;
const { Authenticator } = require("minecraft-launcher-core");

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 720,
	frame: false,
	resizable: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  mainWindow.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

ipcMain.on('close-me', (evt, arg) => {
  app.quit()
})