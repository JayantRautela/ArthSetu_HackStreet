import express from "express";
import {compareTaxController } from "../controllers/tax.controller.js";

const router = express.Router();

router.post("/compare", compareTaxController);

export default router;
