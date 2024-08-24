import express from 'express'
import { login, signup } from '../controller/userController.js';

const router = express.Router();

router.post("/signup",signup); //--ye data usercontroller me bhej rhe hen then bo check karega data he ya nhi
router.post("/login",login); 

export default router;