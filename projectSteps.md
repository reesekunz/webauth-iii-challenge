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

<!-- IF CREATING SEEDS - NOTE THESE STEPS WERE NOT TAKEN TO COMPLETE PROJECT MVP. These example steps were taken from a previous project -->

# npx knex seed:make 00-cleanup

#Create and build out cleanup file
npm i knex-cleaner

# Create seeds and match the names with tables created in migrations/data model

    npx knex seed:make 01-recipes
    npx knex seed:make 02-ingredients
    npx knex seed:make 03-recipe_ingredients
    npx knex seed:make 04-recipe_steps

# Build out recipe seeds <!-- Make sure the seed data aligns with what you created in migrations table and data model-->

# Build out ingredients seeds

# Build out recipe_ingredients seeds

# Build out recipe_steps seeds

# Run creted seed files

    knex seed:run
    (may need to rollback and migrate latest again for migrations if made any changes)

<!-- CREATING HELPERS AND ROUTERS -->

#20. Create a register folder
inside register folder => registerRouter.js

#21. Create a login folder
inside login folder => loginRouter.js

#22. Create a users folder
inside users folder => usersRouter.js

<!-- Note that since theres only one database migration ("users") that we will be referencing for each router, the helpers will go in one individual file. If referencing "register", "login", and "users" tables instead, would add to each respective folder (registerHelpers.js, loginHelpers.js, usersHelpers.js etc.)-->

#23. Create a build out a usersModel inside of a helpers folder
import this into each router

#24. Build out registerRouter.js

#25. Build out loginRouter.js

#26. Build out usersRouter.js
