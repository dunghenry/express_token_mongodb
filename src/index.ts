import {IPort} from './types/index.d';
import express, {Express} from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import viewEngine from './configs/viewEngine';
import routes from './routes';
import connectDB from './configs/connectDB';
dotenv.config();
const port : IPort = process.env.PORT || 4000;
const app : Express = express();
app.use(express.json({extended: true, limit: '50mb'}));
app.use(express.urlencoded({extended: true, limit: '50mb'}));
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(cookieParser());
viewEngine(app);
routes(app);
connectDB();
app.listen(port, () => console.log(`Server listening on http://localhost:${port}`));


