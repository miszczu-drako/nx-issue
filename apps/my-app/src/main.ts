import express from 'express';
import { getUuid } from '@my-org/my-app-api';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

app.get('/', (req, res) => {
  res.send({ message: 'Hello API' });
});

app.get('/uuid', (req, res) => {
  res.send({ uuid: getUuid() });
});

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
