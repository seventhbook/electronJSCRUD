const {app,BrowserWindow} = require('electron');
const url=require('url');
const path= require('path');


app.on('before-quit',()=>{
    console.log("Saliendo...");
});

app.on('ready',()=>{
    let win = new BrowserWindow({
        width:800,
        height:600,
        tittle: 'CRUD Electron',
        center:true,
        maximizable:true,
        webPreferences:{
            nodeIntegration:true
        }
    });
    win.on('move',()=>{
        const position=win.getPosition();
        console.log(position);
    });
    win.on('closed',()=>{
        app.quit();
    });
    win.loadURL(
        url.format({
            pathname:path.join(__dirname,'index.html'),
            protocol: 'file:',
            slashes:true
        })
    );
});