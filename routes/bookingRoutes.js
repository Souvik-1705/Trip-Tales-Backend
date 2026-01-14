import express from "express";
import { confirmBooking, createBooking, deleteBooking, getBookings, getMyBookings, rejectBooking } from "../controllers/bookingController.js";
import { protectAdmin } from "../middleware/authMiddleware.js";
import { protectUser } from "../middleware/protectUser.js";

const router=express.Router();

router.get("/",protectAdmin, getBookings);
router.get("/my",protectUser,getMyBookings);
router.post("/",protectUser,createBooking);
router.put("/:id/confirm",protectAdmin,confirmBooking);
router.put("/:id/reject",protectAdmin,rejectBooking);
router.delete("/:id",protectAdmin,deleteBooking);

export default router;
