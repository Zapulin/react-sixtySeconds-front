import React, { useState } from "react";
import { storeToken } from "../Services/auth.js";
import { useNavigate } from "react-router-dom";
import { login } from "../Services/Api";

const Signin = () => {
  let navigate = useNavigate();

  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
    error_list: [],
  });

  const handleInputChange = (e) => {
    setLoginInput({
      ...loginInput,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email: loginInput.email,
      password: loginInput.password,
    };

    try {
      await login(data).then((res) => {
        if (res.status === 201) {
          const { token } = res.data;
          storeToken(token);
          window.location.href = "/feed";
        } else {
          setLoginInput({
            ...loginInput,
          });
        }
      });
    } catch (e) {
      if (e.response.status === 303) {
        const { token } = e.response.data;
        storeToken(token);
        window.location.href = "/feed";
      }
    }
  };

  return (
    <div className="d-flex justify-content-center w-100">
      <form onSubmit={handleSubmit}>
        <label className="font-monospace fw-bold">Email</label>
        <input
          type="email"
          className="form-control validate"
          name="email"
          onChange={handleInputChange}
          value={loginInput.email}
        />

        <label className="font-monospace fw-bold">Contraseña</label>
        <input
          type="password"
          className="form-control validate"
          name="password"
          onChange={handleInputChange}
          value={loginInput.password}
        />

        <div className=" d-flex justify-content-center">
          <button
            type="submit"
            className="btn rounded-pill  fw-bold text-light m-4"
            style={{ backgroundColor: "#403D3D" }}
          >
            Iniciar Sesión
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signin;
