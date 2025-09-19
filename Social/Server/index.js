//  # we have to add "type":"module" in package.json to use import instead of require

import express from 'express'
import dotenv from 'dotenv'
dotenv.config();
import ConnectDB from './congfig/db.js';
const app = express();
const PORT = 8000;
ConnectDB();
app.use(express.json());
app.get('/', (req, res) => {
    res.send("Hello from Express Server")
})

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})
