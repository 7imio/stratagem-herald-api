import cors from 'cors';
import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import path from 'path';
import stratagemRouter from './routes/stratagemRoutes';

const app = express();

dotenv.config();

const LOCAL_PORT = process.env.LOCAL_PORT;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('./api/', stratagemRouter);

if (LOCAL_PORT) {
  app.listen(LOCAL_PORT, () => {
    console.log(`Server running on http://localhost:${LOCAL_PORT}`);
  });
}

app.get('/images/:filename', (req, res) => {
  const { filename } = req.params;
  const filePath = path.join(__dirname, '../public/Assets', filename);
  res.sendFile(filePath, (err) => {
    console.log('/GET ', filename);
    if (err) {
      console.error('Error sending file: ', filename, err);
      res.status(500).send('no such file');
    }
  });
});

app.get('/', (req: Request, res: Response) => {
  res.send('API is running');
});

export default app;
