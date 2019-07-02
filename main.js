const {app, BrowserWindow} = require('electron')
const shell = require('electron').shell;
let mainWindow;

function createWindow () {
 
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

 
  // mainWindow.maximize();
  mainWindow.loadFile('login.html');
  

     mainWindow.webContents.openDevTools();
}

app.on('ready', createWindow)

// exports.openWindow = () =>{

//   let win = new BrowserWindow({
//      width: 800, 
//      height: 600, 
//      webPreferences: {
//        nodeIntegration: true
//       }
//     });
//   // win.maximize();
//   win.loadFile("second.html");
  
//   win.webContents.openDevTools();
// }

exports.openLink = (browserLink) =>{

  let win;
  // win.loadUrl(browserLink);
  
  shell.openExternal(browserLink)
  
}


