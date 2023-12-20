import express from "express";
import Hotel from "../models/Hotel.js";
import {
  countByCity,
  countByType,
  createHotel,
  deleteHotel,
  getHotel,
  getHotels,
  updateHotel,
} from "../controller/hotel.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

//Create
router.post("/", createHotel);

//Update
router.put("/:id", updateHotel);

//Delete
router.delete("/:id", deleteHotel);

//Get
router.get("/find/:id", getHotel);

//Get All
router.get("/", getHotels);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);

export default router;
