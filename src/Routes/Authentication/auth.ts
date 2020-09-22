import { NextFunction, Request, Response } from "express";
const jwt = require("jsonwebtoken");

module.exports = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, "Cashr_Secret_415");
    const userId = decodedToken.userId;
    if (req.body.userId && req.body.userId !== userId) {
      throw "Invalid user ID";
    } else {
      next();
    }
  } catch {
    res.status(401).json({
      error: new Error("Authentication Failed!"),
    });
  }
};
