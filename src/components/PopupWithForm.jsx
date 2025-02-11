export default function PopupWithForm({
  children,
  name,
  title,
  handleClose,
  handleSubmit,
  isOpen
}) {
  return (
    <div className={`popup popup_${name} ${isOpen ? 'popup_show' : ''}`}>
      <div className="popup__overlay" onClick={handleClose}></div>
      <div className="popup__content">
        <button className="popup__close" onClick={handleClose}></button>
        <div className="popup__body">
          <h2 className="popup__title">{title}</h2>
          <form className={`form form_${name}`} onSubmit={handleSubmit}>
            {children}
            <fieldset className="form__set">
              <input type="submit" className="form__submit" value="Guardar" />
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}
