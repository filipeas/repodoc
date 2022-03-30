import 'dotenv/config';
import 'reflect-metadata';
import 'express-async-errors';

import express from 'express';

// import '../container';

import createConnection from '../typeorm';

import { routes } from './routes';

import { handleException } from './middlewares/handleException';


createConnection();
const app = express();

app.use(express.json());

app.use(routes);

app.use(handleException);

app.listen(process.env.APP_PORT, () => {
    console.log(`Server rodando em ${process.env.APP_URL}`);
});
