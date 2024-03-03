import { Router } from "express";
import { check } from "express-validator";
import { checkValidator } from "../middleware/checkValidator";
import createdUser from "../controllers/user.controller";
import validateJWT from "../middleware/validateJWT";

const route = Router();
route.post(
  "/",
  validateJWT,
  [
    check("password", "El campo  es obligatorio").not().isEmpty(),
    check("email", "El campo Email es obligatorio").not().isEmpty().isEmail(),
    check("typeUser", "El campo Tipo de usuario es obligatorio")
      .not()
      .isEmpty(),
    check("status", "El campo Statu es obligatorio").not().isEmpty(),
    check("rol", "El campo Pais es obligatorio").not().isEmpty(),
    checkValidator,
  ],
  createdUser
);

export default route;
