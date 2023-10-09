import patientData from "../data/patient";
import { NonSensitivePatientData, Patient } from "../types";

const Data: Patient[] = patientData;

export const getAllPatient = (): NonSensitivePatientData[] => {
  return Data.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};
