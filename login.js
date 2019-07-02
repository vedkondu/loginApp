      const remote = require('electron').remote;
      const main = remote.require('./main.js');
      var $ = require('jquery');
      var fs = require('fs');
      var mongo = require("mongodb");
      var url = "mongodb://127.0.0.1:27017/";
      var bcrypt = require('bcryptjs');

      console.log("IN Script tag ");
      document.getElementById("btn-login").addEventListener("click",()=> {
      // $("#btn-login").on("click", () => {
        let txtUser = $("#txtUsr").val();
        let txtPwd = $("#txtPwd").val();


        mongo.connect(url, function(err, db) {
          if (err) throw err;
          var dbo = db.db("logindatabase");
          dbo
            .collection("logindatabase")
              .find({}).toArray(function(err, result) {
              if (err) throw err;
              var out = result.filter(function(item){
              return item.username === txtUser && item.password === txtPwd
            });
            if(out.length)
              {
                  $("#lbl").text("Login Successful");
                  var window = remote.getCurrentWindow();
                  main.openWindow();
                  window.close();
              }

              else if(txtUser === '' || txtPwd === '')
              {
                $("#lbl").text("All fields are mandatory");
              }

              else{
                $("#lbl").text("Please enter valid credentails");
                return false;
              }
            });
        });
      });