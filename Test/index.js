const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter your name: ", (name) => {
  rl.question("Enter your email: ", (email) => {
    rl.question("Enter your password: ", (password) => {
      const newUser = { name, email, password };

      const filePath = "dt.json";

      fs.readFile(filePath, "utf8", (err, data) => {
        let users = [];

        if (!err && data) {
          try {
            users = JSON.parse(data); 
          } catch (e) {
            console.log("Existing file is invalid JSON, creating a new array.");
          }
        }
        users.push(newUser);
        fs.writeFile(filePath, JSON.stringify(users, null, 2), (err) => {
          if (err) {
            console.log("Error saving file:", err);
          } else {
            console.log("User added successfully to dt.json!");
          }
          rl.close();
        });
      });

    });
  });
});
