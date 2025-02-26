import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register({ handleRegistration }) {
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    handleRegistration({ email, password });
  }

  return (
    <div className="login">
      <h1 className="login__title">Register</h1>
      <form className="form login__form" onSubmit={handleSubmit}>
        <input
          type="email"
          required
          className="form__input form__input_email"
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
          value="Registrarse"
        />
      </form>
      <Link to="/login">¿Ya eres miembro? Inicia sesión aquí</Link>
    </div>
  );
}
