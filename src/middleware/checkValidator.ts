import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";

export const checkValidator = (
  req: Request,
  resp: Response,
  next: NextFunction
) => {
  const errorsvalidator = validationResult(req);
  if (!errorsvalidator.isEmpty()) {
    return resp
      .status(400)
      .json({ ok: false, errorsvalidator: errorsvalidator.mapped() });
  }
  next();
};
