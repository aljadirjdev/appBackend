import { NextFunction, Request, Response } from "express";
import { header } from "express-validator";
const jwt = require("jsonwebtoken");

export interface custonRequest extends Request {
  _id?: number;
}

const validateJWT = (
  req: custonRequest,
  resp: Response,
  next: NextFunction
) => {
  const token = req.header("x-token");
  console.log(token);
  if (!token) {
    return resp.status(401).json({
      ok: false,
      msg: "No hay token en la peticion",
    });
  }
  try {
    const { _id } = jwt.verify(token, process.env.JWT_SECRET);
    req._id = _id;
    next();
  } catch (error) {
    return resp.status(401).json({
      ok: false,
      msg: "No hay token",
    });
  }
};
export default validateJWT;
