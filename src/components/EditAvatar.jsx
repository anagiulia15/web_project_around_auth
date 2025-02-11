import { useRef } from "react";
import { useEffect, useContext } from "react";
import { currentuserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

export default function EditAvatar({
  isEditProfilePopupOpen,
  handleClosePoups,
  onUpdateUser,
}) {
  const currentUser = useContext(currentuserContext);
  const ref = useRef();
  useEffect(() => {}, [currentUser]);

  function handleSubmit(e) {
    // Evita que el navegador navegue hacia la dirección del formulario
    e.preventDefault();

    // Pasa los valores de los componentes gestionados al controlador externo
    onUpdateUser({
      avatar: ref.current.value,
    });
  }
  return (
    <PopupWithForm
      name="avatar"
      title="editar avatar"
      isOpen={isEditProfilePopupOpen}
      handleClose={handleClosePoups}
      handleSubmit={handleSubmit}
    >
      <fieldset className="form__set">
        <input
          type="url"
          className="form__input form__input_avatar"
          name="avatar"
          required
          ref={ref}
        />
      </fieldset>
    </PopupWithForm>
  );
}
