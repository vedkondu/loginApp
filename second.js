const remote = require('electron').remote;
const main = remote.require('./main.js');
document.getElementById("button").addEventListener("click",()=> {

    main.openLink("https://www.abhibus.com/");
    
    
})