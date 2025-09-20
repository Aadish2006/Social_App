*  we have to add the 
"type":"module" in the json file se we can use import features just like react 
without it we cannot use import and has to use require.

*  we can cahnge the scripts in json 
as like in json under scripts we added "dev": "npx nodemon index.js"
this will run the index.js file as we right npx run dev

dbURL =mongodb+srv://Aadish_:Aadish_Sanghai@cluster0.aljxab3.mongodb.net/___?retryWrites=true&w=majority&appName=Cluster0
the space between the url is for naming the database

*  TO pass the URL 
we have to use 
process.env.dbURL
*  when we want to pass the url we have to user process.env
for that we have to write 
import dotenv from 'dotenv'
dotenv.config();

* * WE WILL HAVE TO WRITE 
    app.use(express.json) which will unable us to use the json file whererever we want to.
  - - - - - -- --  -- ----- -

  # Feature discussion :
  1) authentication: we have to specify where we will be authenticated where will be authorised and all that stuff so we are going to use MVC (model view Controller ) architecture here for it.
   + we will have a model User in which we will design a schema for our database and we als
   + we will also create auth.controller.js in which we will have sinup sign in login etc
   * * WE WILL HAVE TO WRITE 
    app.use(express.json) which will unable us to use the json file whererever we want to.

  2)   now we have to create Routes for authentication so we have to create routes for signup signin login etc
   + so we
  ```
  import express from 'express'
  const authRouter  = express.router()
  ```

## Hashhing Passwords
we use bcrypt to hash the passwords so that no one can see the password
we have to
* import bcrypt from 'bcryptjs'
* npm install bcryptjs

* const salt = await bcrypt.genSalt(10)
* const hashedPassword = await bcrypt.hash(password,salt);
* await User.create({name,email,password: hashedPassword,username})
* for checking const isPasswordCorrect = await bcrypt.compare(password,existingUser.password) 
* # here bcrypt.compare(password,existingUser.hashedPassword)  this will return true or false
  
# lec2 
* Login and Logout API
* Whata is JWT
* Cookies
* Auth Middlware
* Setting up frontend with signup and signin pages

