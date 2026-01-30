const { app, BrowserWindow, dialog } = require('electron');
const path = require('path');

function createWindow() {
    try {
        const win = new BrowserWindow({
            width: 1280,
            height: 800,
            title: "Panel de Administración",
            icon: path.join(__dirname, 'img/logo.png'), // Asegúrate de que img/logo.png exista
            webPreferences: {
                nodeIntegration: false,
                contextIsolation: true
            },
            autoHideMenuBar: true // Oculta la barra de menú típica de Windows (Archivo, Editar...)
        });

        win.loadFile(path.join(__dirname, 'index.html')).catch(e => {
            dialog.showErrorBox("Error de carga", "No se pudo cargar el archivo: " + e.message);
        });
    } catch (error) {
        dialog.showErrorBox("Error Fatal", "La aplicación no pudo iniciar: " + error.message);
        app.quit();
    }
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});