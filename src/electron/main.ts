import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const isDev = !app.isPackaged;

let win: BrowserWindow;

function createWindow() {
    win = new BrowserWindow({
        show: false,
        webPreferences: {
            contextIsolation: false,
            nodeIntegration: true,
        },
        frame: false,
        fullscreen: true
    });

    win.once('ready-to-show', () => {
        win.show();
    });

    if (isDev) {
        win.loadURL('http://localhost:5173');
    } else {
        win.loadFile(path.resolve(app.getAppPath(), 'dist/index.html'));
    }
}

ipcMain.on('minimize-window', () => {
    win?.minimize();
});

ipcMain.on('maximize-window', () => {
    if (win?.isMaximized()) {
        win.unmaximize();
    } else {
        win?.maximize();
    }
});

ipcMain.on('close-window', () => {
    win?.close();
});

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
