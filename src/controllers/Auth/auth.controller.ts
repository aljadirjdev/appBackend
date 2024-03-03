import { Request, Response } from "express";
import UserModel from "../../models/user.model";
import bcrypt from "bcryptjs";
import generateToken from "../../helpers/jwt";

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
