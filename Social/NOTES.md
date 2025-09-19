# we have to add the 
"type":"module" in the json file se we can use import features just like react 
without it we can use import and has to use require.

# we can cahnge the scripts in json 
as like in json under scripts we added "dev": "npx nodemon index.js"
this will run the index.js file as we right npx run dev

dbURL =mongodb+srv://Aadish_:Aadish_Sanghai@cluster0.aljxab3.mongodb.net/___?retryWrites=true&w=majority&appName=Cluster0
the space between the url is for naming the database

## TO pass the URL 
we have to use 
process.env.dbURL

## when we want to pass the url we have to user process.env
for that we have to write 
import dotenv from 'dotenv'
dotenv.config();