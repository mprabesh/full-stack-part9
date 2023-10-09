import express from "express";
import cors from "cors";
import patientRouter from "./routes/patient";
const app = express();

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
app.use(cors());
app.use(express.json());

const PORT = 3001;

app.get("/ping", (req, res) => {
  res.send("PONG");
});

app.use("/api/patients", patientRouter);

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
