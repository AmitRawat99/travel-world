
import express from 'express'
const router = express.Router()
import { VerifyAdmin } from '../Utils/verfyToken.js'
import { createBooking , getAllBooking , getBooking } from '../controllers/bookingController.js'

router.post('/' , VerifyAdmin , createBooking)
router.get('/:id' , VerifyAdmin , getBooking)
router.get('/' , VerifyAdmin , getAllBooking)

export default router