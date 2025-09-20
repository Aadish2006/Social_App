import express from 'express'
import {SignUp,signIn} from '../controllers/auth.controllers.js' 

const authRouter  = express.Router()

authRouter.post('/signup',SignUp)
authRouter.post('/signin',signIn)

export default authRouter