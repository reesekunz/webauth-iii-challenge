#1. npm i

#2. npm i express

#3. npm init -y

<!-- gives you package.json -->

#4. npx gitignore node

#5. npm i -D nodemon

 <!-- installs nodemon as dev dependency -->

#6. npm i bcryptjs

#7. Add scripts to package.json
"scripts": {
"server": "nodemon index.js",
"start": "node index.js"
},

#8. Add and build out server.js
const express = require("express");

// const usersRouter = require("./users/usersRouter");
// const registerRouter = require("./register/registerRouter");
// const loginRouter = require("./login/loginRouter");

const server = express();

server.use(express.json());

// server.use("/api/users", usersRouter);
// server.use("/api/register", registerRouter);
// server.use("/api/login", loginRouter);

server.get("/", (request, response) => {
response.send("It's alive!");
});

module.exports = server;

#9. Add and build out index.js
const server = require("./server");

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`Running on port ${port}`));

#10. npm run server
Can make a GET request to localhost:5000 on Postman to make sure its working. Should return "It's alive!"

#11. npm add knex sqlite3

#12. knex init

 <!-- creates knexfile.js-->

#13. Update knex.js file to match your config settings

#14. Add a database folder

#15. knex migrate:make users-table

 <!-- this makes a migrations folder inside the database folder, as well as a file named users-table where you will create the table migrations inside -->

#16. Add and build out db-config.js file inside the database folder

#17. Plan out your tables in the data model, specifically how the foreign keys/primary keys and each table is connected with each other (if they are)

#18. Build out migrations tables to match data model and requirements

#19. knex migrate:latest

 <!-- will make sure migrations are up to date as well as create a recipes.db3 file
if need to make changes to migrations, knex migrate:rollback then migrate latest again to update -->
