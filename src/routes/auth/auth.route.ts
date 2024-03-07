import { Router } from "express";
import { check } from "express-validator";
import { login, newToken } from "../../controllers/Auth/auth.controller";
import { checkValidator } from "../../middleware/checkValidator";
import validateJWT from "../../middleware/validateJWT";
import {
  tokenUpdatePassword,
  updatePassword,
} from "../../controllers/Auth/changePassword";

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
route.get("/", validateJWT, newToken);

route.post("/changePassword", tokenUpdatePassword);

route.put("/:id", validateJWT, updatePassword);

export default route;
