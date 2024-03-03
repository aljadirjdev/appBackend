// User
import { Router } from "express";
import { check } from "express-validator";
import { checkValidator } from "../middleware/checkValidator";
import validateJWT from "../middleware/validateJWT";
import {
  createCustomer,
  getAllCustomers,
  getOneCustomer,
  statusChangeCustomer,
  updateCustomer,
} from "../controllers/customers.controller";

const route = Router();
route.post(
  "/",
  validateJWT,
  [
    check("firstName", "El campo Nombres es obligatorio").not().isEmpty(),
    check("lastName", "El campo Apellidos es obligatorio").not().isEmpty(),
    check("email", "El campo Email es obligatorio").not().isEmpty().isEmail(),
    check("documentType", "El campo Tipo de documento es obligatorio")
      .not()
      .isEmpty(),
    check("documentNumber", "El campo Documento es obligatorio")
      .not()
      .isEmpty(),
    check("country", "El campo Pais es obligatorio").not().isEmpty(),
    check("city", "El campo Ciudad es obligatorio").not().isEmpty(),
    check("address", "El campo Direccion es obligatorio").not().isEmpty(),
    check("typeUser", "El campo Tipo de usuario es obligatorio")
      .not()
      .isEmpty(),
    checkValidator,
  ],
  createCustomer
);
route.get("/", validateJWT, getAllCustomers);
route.get("/:id", validateJWT, getOneCustomer);
route.put("/:id", validateJWT, updateCustomer);
route.delete("/:id", validateJWT, statusChangeCustomer);

export default route;
