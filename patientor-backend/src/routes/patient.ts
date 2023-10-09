import express from "express";
const patientRouter = express.Router();
import patientData from "../data/patient";

patientRouter.get("/", (req, res) => {
  res.status(200).json(patientData);
});

export default patientRouter;
