import express, { Request, Response } from "express";
import crypto from 'crypto';

const LoginRouter = express.Router();

LoginRouter.post("/login", (req: Request, res: Response) => {
  const username = req.body.username;
  const password = req.body.password;


});

export default LoginRouter;
