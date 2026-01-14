import express from "express";
import { createDestination, deleteDestination, getDestinationById, getDestinations, updateDestination } from "../controllers/destinationController.js";
import { protectAdmin } from "../middleware/authMiddleware.js";

const router=express.Router();

router.get("/",getDestinations);
router.post("/",protectAdmin,createDestination);
router.get("/:id",getDestinationById);
router.put("/:id",protectAdmin,updateDestination);
router.delete("/:id",protectAdmin,deleteDestination);

export default router;