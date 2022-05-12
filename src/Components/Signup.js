import React, { useState } from "react";
import { storeToken } from "../Services/auth.js"
import { register } from '../Services/Api';

const Signup = () => {

  const [registerInput, setRegister] = useState({
    name: "",
    userName: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    birthdate: "",
    error_list: [],
  });


  const handleInput = e => {
    const {name, value} = e.target;
    setRegister
    ({ ...registerInput, [name]: value });
  };

  const registerSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name: registerInput.name,
      username: registerInput.userName,
      email: registerInput.email,
      password: registerInput.password,
      password_confirmation: registerInput.passwordConfirm,
      birthdate: registerInput.birthdate,
    };

    try {
      await register(data)
        .then((res) => {
          if (res.status === 201) {
            const { token } = res.data;
            storeToken(token)
            window.location.href = '/feed';
          } else {
            setRegister({
              ...registerInput,
              error_list: res.validation_errors,
            });
          }
        });
      // });
    } catch (e) {
     
    }
  };

  return (
    <div className="container d-flex justify-content-center">
      <div className="d-flex justify-content-center">
        <form onSubmit={registerSubmit}>
          <label className="font-monospace fw-bold">Nombre y Apellidos</label>
          <input
            type="text"
            name="name"
            onChange={handleInput}
            value={registerInput.name}
            className="form-control validate"
          />
          <span>{registerInput.error_list.name}</span>

          <label className="font-monospace fw-bold">Nombre de usuario</label>
          <input
            type="text"
            className="form-control validate"
            name="userName"
            onChange={handleInput}
            value={registerInput.userName}
          />

          <span>{registerInput.error_list.userName}</span>

          <label className="font-monospace fw-bold">Email</label>
          <input
            type="email"
            className="form-control validate"
            name="email"
            onChange={handleInput}
            value={registerInput.email}
          />

          <span>{registerInput.error_list.email}</span>

          <label className="font-monospace fw-bold">Contraseña</label>
          <input
            type="password"
            className="form-control validate"
            name="password"
            onChange={handleInput}
            value={registerInput.password}
          />
          <span>{registerInput.error_list.password}</span>

          <label className="font-monospace fw-bold">Confirmar Contraseña</label>
          <input
            type="password"
            className="form-control validate"
            name="passwordConfirm"
            onChange={handleInput}
            value={registerInput.passwordConfirm}
          />
          <span>{registerInput.error_list.passwordConfirm}</span>

          <label className="m-2 font-monospace fw-bold">
            Fecha de nacimiento{" "}
            <input
              type="date"
              name="birthdate"
              onChange={handleInput}
              value={registerInput.birthdate}
            />{" "}
            <span>{registerInput.error_list.birthdate}</span>
          </label>

          <div className="justify-items-center d-flex">
            <input className="form-check-input m-2" type="checkbox" value="" />
            <label className="form-check-label font-monospace fw-bold m-1">
              Acepto la política de privacidad
            </label>
          </div>
          <div className="justify-items-center d-flex">
           
            <button
              type="submit"
              className="btn w-50 rounded-pill container-fluid fw-bold text-light mt-4"
              style={{ backgroundColor: "#403D3D" }}
            >
              Registrarse
            </button>
          </div>
        </form>
      </div>
    </div>
    
  );
};

export default Signup;
