import express from "express";

import { userSignup, userLogin, getAllUser } from '../controller/user-controller.js'

const router = express.Router();

router.post('/signup', userSignup)
router.post('/login', userLogin)

router.get('/userdata', getAllUser)

export default router;