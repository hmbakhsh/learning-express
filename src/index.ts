import express, { Request, Response } from 'express';
import router from './router.js'
import 'dotenv/config'

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use('/', router)

app.listen(port, () => {
  console.log('Server running on http://localhost:' + port);
})