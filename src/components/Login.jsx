import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { currentuserContext } from "../contexts/CurrentUserContext";

export default function Login({ handleLogin }) {
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    handleLogin({ email, password });
  }

  return (
    <div className="login">
      <h1 className="login__title">Iniciar sesion</h1>
      <form className="form login__form" onSubmit={handleSubmit}>
        <input
          type="email"
          required
          className="form__input form__input_email login__input"
          name="email"
          onChange={(e) => setemail(e.target.value)}
          placeholder="anaazanedo09@gmail.com"
        />
        <input
          type="password"
          required
          className="form__input form__input_password login__input"
          name="password"
          onChange={(e) => setpassword(e.target.value)}
          placeholder="***"
        />
        <input
          type="submit"
          className="form__submit login__submit"
          value="Iniciar sesion"
        />
      </form>
      <Link to="/signup">¿Aún no eres miembro? Regístrate aquí</Link>
    </div>
  );
}
