import express, { type Request, type Response } from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors({
  origin: process.env.FRONTEND_URL
}));

const PORT = process.env.PORT;

app.get('/health-check', (req: Request, res: Response) => {
  return res.status(200).json({
    success: true,
    message: "Server running fine"
  });
}) 

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
})
.on("error", (err) => {
  console.error(err)
});