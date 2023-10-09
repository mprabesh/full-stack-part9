import express from "express";
const patientRouter = express.Router();
import { getAllPatient } from "../services/patient";

patientRouter.get("/", (req, res) => {
  res.status(200).json(getAllPatient());
});

export default patientRouter;
