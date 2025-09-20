import express from 'express'
import {SignUp} from '../controllers/auth.controllers.js' 

const authRouter  = express.Router()

authRouter.post('/signup',SignUp)

export default authRouter