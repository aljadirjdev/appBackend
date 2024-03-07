import { Request, Response } from "express";

import UserModel from "../../models/user.model";
import generateToken from "../../helpers/jwt";
import bcrypt from "bcryptjs";
export const tokenUpdatePassword = async (req: Request, resp: Response) => {
  const { body } = req;
  const { email, documentNumber } = body;

  const exitsEmailAndDocument = await UserModel.findOne({
    email: email,
    documentNumber: documentNumber,
  });

  if (!exitsEmailAndDocument) {
    resp.json({
      ok: false,
      msg: "Informacion suministrada, no concuerda con los datos almacenados",
    });
  }

  // Generate token
  const token = await generateToken(exitsEmailAndDocument._id, email);

  try {
    resp.json({
      ok: true,
      token,
      msg: "Token generado",
    });
  } catch (error) {
    resp.status(401).json({
      ok: false,
      error,

      msg: "Comuniquese con el administrador",
    });
  }
};

export const updatePassword = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;
    const { body } = req;
    const { password } = body;

    let passwordEncrypter = bcrypt.hashSync(password, 10);

    const updatePassword = await UserModel.findByIdAndUpdate(id, password, {
      new: true,
    });
    resp.json({
      ok: true,
      password: passwordEncrypter,
    });
  } catch (error) {
    resp.status(400).json({
      ok: false,
      msg: "Error al actualizar el usuarios",
    });
  }
};
