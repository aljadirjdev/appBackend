const jwt = require("jsonwebtoken");

const generateToken = (
  _id: string,
  email: string = "",
  expiresIn = process.env.JWT_EXPIRE_IN,
  jwtSecret = process.env.JWT_SECRET
) => {
  return new Promise((resolve, reject) => {
    const payload = {
      _id,
      email,
    };
    jwt.sign(
      payload,
      jwtSecret,
      {
        expiresIn: expiresIn,
      },

      (error: string, toke: string) => {
        if (error) {
          console.log(error);
          reject("No se pudo generar el token");
        } else resolve(toke);
      }
    );
  });
};
export default generateToken;
