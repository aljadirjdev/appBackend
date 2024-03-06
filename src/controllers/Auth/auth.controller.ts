import { Request, Response } from "express";
import UserModel from "../../models/user.model";
import bcrypt from "bcryptjs";
import generateToken from "../../helpers/jwt";
import { custonRequest } from "../../middleware/validateJWT";

export const login = async (req: Request, resp: Response) => {
  const { email, password } = req.body;
  try {
    const userLogin = await UserModel.findOne({ email });
    if (!userLogin) {
      return resp.status(401).json({
        ok: false,
        msg: "Credenciales no validas",
      });
    }

    // Validar password
    const validatePassword = bcrypt.compareSync(password, userLogin.password);
    if (!validatePassword) {
      return resp.status(401).json({
        ok: false,
        msg: "Usuario y contraseña incorrecto",
      });
    }
    // generate token
    const token = await generateToken(userLogin._id, userLogin.email);

    resp.status(200).json({ ok: true, user: userLogin, token });
  } catch (error) {
    resp.status(400).json({
      ok: false,
      error,
      msg: "Pongase en contacto con el admin",
    });
  }
};

export const newToken = async (req: custonRequest, resp: Response) => {
  const id = req._id;
  if (typeof id === "undefined") {
    throw new Error("No existe id");
  }
  const user = await UserModel.findById(id);
  // Generate token
  const token = await generateToken(id.toString());

  try {
    resp.json({
      ok: true,
      token,
      user,
    });
  } catch (error) {
    resp.status(401).json({
      ok: false,
      error,
      msg: "Comuniquese con el administrador",
    });
  }
};
