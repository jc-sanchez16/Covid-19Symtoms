import React, { useRef, useState } from "react";
// import PropTypes from 'prop-types';
import "../css/login.css";
const Register = () => {
  const [msg, setmsg] = useState("");
  const formRef = useRef();
  const onRegister = (evt) => {
    evt.preventDefault();
    const nombre = formRef.current.nombre.value;
    const username = formRef.current.username.value;
    const genero = formRef.current.genero.value;
    const tipoSangre = formRef.current.tipoSangre.value;
    const rh = formRef.current.rh.value;
    const nacimiento = formRef.current.nacimiento.value;
    const password = formRef.current.password.password;
    const confirmPassword = formRef.current.confirmPassword.password;
    if (confirmPassword !== password) {
      console.log("Do not match");
      setmsg("Las contraseñas no coinciden");
    }

    console.log(formRef.current);
  };
  return (
    <div>
      <div className="container">
        <div className="d-flex justify-content-center h-100">
          <div className="cardR">
            <div className="card-headerLogin">
              <h3>Registrate</h3>
            </div>
            <div className="card-body">
              <form ref={formRef} onSubmit={onRegister}>
                <label htmlFor="nombre">Nombre completo</label>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <img
                        src="./usr.svg"
                        height="20"
                        width="20"
                        className="ml-2 mr-4 d-inline-block"
                        alt="Nombre completo"
                      />
                    </span>
                  </div>
                  <input
                    id="nombre"
                    type="text"
                    className="form-control"
                    name="nombre"
                    placeholder="Nombre completo"
                    required
                  />
                </div>
                <label htmlFor="correo">Correo</label>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <img
                        src="./emailsvg.svg"
                        height="20"
                        width="20"
                        className="ml-2 mr-4 d-inline-block"
                        alt="Coreo"
                      />
                    </span>
                  </div>
                  <input
                    id="correo"
                    type="email"
                    name="username"
                    className="form-control"
                    placeholder="Correo"
                    required
                  />
                </div>
                <label htmlFor="genero">Género</label>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <img
                        src="./gendre.svg"
                        height="20"
                        width="20"
                        className="ml-2 mr-4 d-inline-block"
                        alt="Género"
                      />
                    </span>
                  </div>
                  <select
                    className="custom-select"
                    id="genero"
                    name="genero"
                    required
                  >
                    <option defaultValue disabled>
                      Género
                    </option>
                    <option value="1">Femenino</option>
                    <option value="2">Masculino</option>
                  </select>
                </div>
                <label htmlFor="sangre">Tipo de sangre</label>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <img
                        src="./blood.svg"
                        height="20"
                        width="20"
                        className="ml-2 mr-4 d-inline-block"
                        alt="Tipo de sangre"
                      />
                    </span>
                  </div>
                  <select
                    className="custom-select"
                    id="sangre"
                    name="tipoSangre"
                    required
                  >
                    <option defaultValue disabled>
                      Tipo de sangre
                    </option>
                    <option value="1">O</option>
                    <option value="2">A</option>
                    <option value="2">B</option>
                    <option value="2">AB</option>
                  </select>
                </div>
                <label htmlFor="rh">Factor RH</label>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <img
                        src="./rh.svg"
                        height="20"
                        width="20"
                        className="ml-2 mr-4 d-inline-block"
                        alt="Factor RH"
                      />
                    </span>
                  </div>
                  <select className="custom-select" id="rh" name="rh" required>
                    <option defaultValue disabled>
                      Factor RH
                    </option>
                    <option value="+">+</option>
                    <option value="-">-</option>
                  </select>
                </div>
                <label htmlFor="nacimiento">Fecha de nacimiento</label>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <img
                        src="./date.svg"
                        height="20"
                        width="20"
                        alt="Fecha de nacimiento"
                        className="ml-2 mr-4 d-inline-block"
                      />
                    </span>
                  </div>
                  <input
                    name="nacimiento"
                    type="date"
                    id="nacimiento"
                    name="nacimiento"
                    min="1920-01-01"
                    className="form-control"
                    required
                  />
                </div>
                <label htmlFor="password">Constraseña</label>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <img
                        src="./pass.svg"
                        height="20"
                        width="20"
                        className="ml-2 mr-4 d-inline-block"
                        alt="Contraseña"
                      />
                    </span>
                  </div>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="Contraseña"
                    required
                  />
                </div>
                <label htmlFor="confirmPassword">Confirma tu contraseña</label>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <img
                        src="./pass2.svg"
                        height="20"
                        width="20"
                        className="ml-2 mr-4 d-inline-block"
                        alt="Logo de confirma tu contraseña"
                      />
                    </span>
                  </div>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    className="form-control"
                    placeholder="Confirma la contraseña"
                    required
                  />
                </div>
                <div className="err">{msg}</div>
                <button type="submit" className="btn float-right btnLoginIn">
                  Registrarse
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Login.propTypes = {

// };

export default Register;
