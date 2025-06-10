import { app, BrowserWindow } from 'electron';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const isDev = !app.isPackaged;
function createWindow() {
    const win = new BrowserWindow({
        show: false,
        webPreferences: {
            contextIsolation: false,
        },
    });

    win.maximize();
    win.show();

    if (isDev) {
        win.loadURL('http://localhost:5173');
    } else {
        win.loadFile(path.resolve(app.getAppPath(), 'dist/index.html'));
    }
}
app.whenReady().then(createWindow);
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin')
        app.quit();
});
app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0)
        createWindow();
});