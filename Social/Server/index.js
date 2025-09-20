//  # we have to add "type":"module" in package.json to use import instead of require

import express from 'express'
import dotenv from 'dotenv'
dotenv.config();
import ConnectDB from './congfig/db.js';
import authRouter from './routes/auth.routes.js';

const app = express();
const PORT = 8000;

app.use(express.json());


// Authentication ROutes
app.use('/api/auth',authRouter)


ConnectDB();



app.get('/', (req, res) => {
    res.send("Hello from Express Server")
})

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})
