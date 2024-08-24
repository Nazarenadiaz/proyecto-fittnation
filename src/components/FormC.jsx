import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

const FormC = ({ idPagina }) => {
  const navigate = useNavigate();
  const [formRegister, setFormRegister] = useState({
    usuario: "",
    contrasenia: "",
    rcontrasenia: "",
  });
  const [errores, setErrores] = useState({});

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setFormRegister({ ...formRegister, [name]: value });
  };

  const handleClick = (ev) => {
    ev.preventDefault();

    const newErrores = {};

    if (!formRegister.usuario) {
      newErrores.usuario = "Campo USUARIO vacío";
    }

    if (!formRegister.contrasenia) {
      newErrores.contrasenia = "Campo CONTRASEÑA vacío";
    }

    if (idPagina === "registro" && !formRegister.rcontrasenia) {
      newErrores.rcontrasenia = "Campo REPETIR CONTRASEÑA vacío";
    }

    if (Object.keys(newErrores).length > 0) {
      setErrores(newErrores);
      return;
    }

    if (formRegister.contrasenia !== formRegister.rcontrasenia) {
      alert("Las contraseñas no son iguales");
      return;
    }

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    const usuarioExiste = usuarios.find(
      (usuario) => usuario.nombreUsuario === formRegister.usuario
    );

    if (usuarioExiste) {
      alert("Usuario no disponible");
      return;
    }

    const nuevoUsuario = {
      id: usuarios.length > 0 ? usuarios[usuarios.length - 1].id + 1 : 1,
      nombreUsuario: formRegister.usuario,
      contrasenia: formRegister.contrasenia,
      role: "usuario",
      bloqueado: false,
    };

    usuarios.push(nuevoUsuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    setTimeout(() => {
      navigate("/iniciar-sesion");
    }, 1000);
  };

  return (
    <Form className="form-container">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Usuario</Form.Label>
        <Form.Control
          name="usuario"
          type="text"
          placeholder="Ingrese el usuario"
          onChange={handleChange}
          value={formRegister.usuario}
          className={
            errores.usuario ? "form-control is-invalid" : "form-control"
          }
        />
        {errores.usuario && <p className="text-danger">{errores.usuario}</p>}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control
          name="contrasenia"
          type="password"
          placeholder="Ingrese la contraseña"
          onChange={handleChange}
          value={formRegister.contrasenia}
          className={
            errores.contrasenia ? "form-control is-invalid" : "form-control"
          }
        />
        {errores.contrasenia && (
          <p className="text-danger">{errores.contrasenia}</p>
        )}
      </Form.Group>

      {idPagina === "registro" && (
        <Form.Group className="mb-3" controlId="formRepeatPassword">
          <Form.Label>Repetir Contraseña</Form.Label>
          <Form.Control
            name="rcontrasenia"
            type="password"
            placeholder="Repita la contraseña"
            onChange={handleChange}
            value={formRegister.rcontrasenia}
            className={
              errores.rcontrasenia ? "form-control is-invalid" : "form-control"
            }
          />
          {errores.rcontrasenia && (
            <p className="text-danger">{errores.rcontrasenia}</p>
          )}
        </Form.Group>
      )}

      <Button variant="primary" type="submit" onClick={handleClick}>
        {idPagina === "registro" ? "Ingresar" : "Ingresar"}
      </Button>
    </Form>
  );
};

export default FormC;
