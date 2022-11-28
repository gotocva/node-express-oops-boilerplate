import express from 'express';

import loginController from "../controllers/login-controller";

const userRouter = express.Router();



userRouter.get('/', loginController.login);


module.exports = userRouter;