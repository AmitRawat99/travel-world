
import express from 'express'
const router = express.Router()
import {createReview} from '../controllers/reviewController.js'
import { VerifyAdmin } from '../Utils/verfyToken.js'

router.post('/:tourId' , VerifyAdmin , createReview)

export default router