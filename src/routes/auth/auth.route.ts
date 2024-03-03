import { Router } from "express";
import { check } from "express-validator";
import { login } from "../../controllers/Auth/auth.controller";
import { checkValidator } from "../../middleware/checkValidator";

const route = Router();
route.post(
  "/",
  [
    check("password", "El campo  es obligatorio").not().isEmpty(),
    check("email", "El campo Email es obligatorio").not().isEmpty().isEmail(),
    checkValidator,
  ],
  login
);

export default route;
