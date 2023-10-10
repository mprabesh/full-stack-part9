import express from "express";
const patientRouter = express.Router();
import { getAllPatient, addPatient } from "../services/patient";

patientRouter.get("/", (req, res) => {
  res.status(200).json(getAllPatient());
});

patientRouter.post("/", (req, res) => {
  /* eslint-disable @typescript-eslint/no-unsafe-assignment */
  const { name, dateOfBirth, ssn, gender, occupation } = req.body;
  const newEntry = addPatient({ name, dateOfBirth, ssn, gender, occupation });
  res.json(newEntry);
});

export default patientRouter;
