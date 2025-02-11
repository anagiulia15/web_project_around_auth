import { useState, useEffect, useContext } from "react";
import { currentuserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

export default function EditProfile({
  isEditProfilePopupOpen,
  handleClosePopups,
  onUpdateUser,
}) {
  const currentUser = useContext(currentuserContext);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  // Después de cargar el usuario actual desde la API
  // sus datos serán usados en componentes gestionados.
  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleSubmit(e) {
    // Evita que el navegador navegue hacia la dirección del formulario
    e.preventDefault();

    // Pasa los valores de los componentes gestionados al controlador externo
    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      name="profile"
      title="editar perfil"
      handleSubmit={handleSubmit}
      isOpen={isEditProfilePopupOpen}
      handleClose={handleClosePopups}
    >
      <fieldset className="form__set">
        <input
          type="text"
          className="form__input form__input_name"
          name="name"
          minLength="2"
          maxLength="40"
          defaultValue={name}
          onInput={(e) => setName(e.target.value)}
          placeholder="Nombre"
          required
        />
        <span className="form__error form__error_name"></span>
        <input
          type="text"
          className="form__input form__input_about"
          name="about"
          minLength="2"
          maxLength="200"
          onInput={(e) => setDescription(e.target.value)}
          defaultValue={description}
          placeholder="Acerca de mi"
          required
        />
        <span className="form__error form__error_about"></span>
      </fieldset>
    </PopupWithForm>
  );
}
