const { response } = require("express");
const bcrypt = require("bcryptjs");

const Usuario = require("../models/usuario");

const login = async (req, res = response) => {
  const { email, password } = req.body;

  try {
    const usuarioDB = await Usuario.findOne({ email });

    // Verificar emanil
    if (!usuarioDB)
      res.status(404).json({ ok: false, msg: "Email no encontrado" });

    // Verificar contraseña
    const validPassword = bcrypt.compareSync(password, usuarioDB.password);
    if (!validPassword) {
      return res.status(400).json({
        ok: false,
        msg: "contrasena no valida",
      });
    }

    // Generar el token - jwt

    res.json({
      ok: true,
      msg: "hola mundo",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "error inesperado",
    });
  }
};

module.exports = {
  login,
};
