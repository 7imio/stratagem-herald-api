import cors from 'cors';
import dotenv from 'dotenv';
import express, { Request, Response } from 'express';

const app = express();

dotenv.config();

const LOCAL_PORT = process.env.LOCAL_PORT;

app.use(cors());
app.use(express.json());

if (LOCAL_PORT) {
  app.listen(LOCAL_PORT, () => {
    console.log(`Server running on http://localhost:${LOCAL_PORT}`);
  });
}

app.get('/', (req: Request, res: Response) => {
  res.send('API is running');
});

export default app;
