import express from 'express'
import { getBook } from "../controller/bookController.js";

const router = express.Router();

router.get("/",getBook);  //-----ye api create ki he get request ki

export default router;