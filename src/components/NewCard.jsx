import { useState } from "react";
import PopupWithForm from "./PopupWithForm";

export default function NewCard({
  handleClosePopups,
  isOpen,
  onAddPlaceSubmit,
}) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  // Después de cargar el usuario actual desde la API
  // sus datos serán usados en componentes gestionados.

  function handleSubmit(e) {
    // Evita que el navegador navegue hacia la dirección del formulario
    e.preventDefault();

    // Pasa los valores de los componentes gestionados al controlador externo
    onAddPlaceSubmit(name, link);
  }

  return (
    <PopupWithForm
      name="add-card"
      title="agregar tarjeta"
      isOpen={isOpen}
      handleClose={handleClosePopups}
      handleSubmit={handleSubmit}
    >
      <fieldset className="form__set">
        <input
          type="text"
          className="form__input form__input_name"
          name="name"
          placeholder="Título"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          minLength="2"
          maxLength="30"
        />
        <span className="form__error form__error_name"></span>
        <input
          type="url"
          required
          className="form__input form__input_link"
          name="link"
          onChange={(e) => setLink(e.target.value)}
          placeholder="Enlace de la imagen"
        />
        <span className="form__error form__error_link"></span>
      </fieldset>
    </PopupWithForm>
  );
}
