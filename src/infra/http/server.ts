import 'dotenv/config';
import 'reflect-metadata';
import 'express-async-errors';

import express from 'express';

import { handleException } from './middlewares/handleException';

import './container';

import createConnection from '../typeorm';

import { routes } from './routes';

createConnection();
const app = express();

app.use(express.json());

app.use(routes);

app.use(handleException);

app.listen(process.env.PORT || process.env.APP_PORT, () => {
    console.log(`Server rodando em ${process.env.APP_URL}`);
});
