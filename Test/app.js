const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question("Enter name: ", function(name) {
  rl.question("Enter email: ", function(email) {
    rl.question("Enter password: ", function(password) {
       const data = {
        name: name,
        email: email,
        password: password
      };
      fs.appendFile("dt.js", jsondata + "\n", function(error) {
        if (error) {
          console.log("Error!");
        } else {
          console.log("Saved successfully!");
        }
        rl.close();
      });
    });
  });
});