import jwt from 'jsonwebtoken';
import express from 'express';
import { authentication } from '../middleWare/authentication';
const jwtRouter = express.Router();

jwtRouter.get('/jwt', authentication)