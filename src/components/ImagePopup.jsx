export default function ImagePopup({ open, selectedCard,handleClosePopups }) {
  return (
    <div className={"popup " + (open ? "popup_show" : "")} id="popupopenimage">
      <div className="popup__overlay"></div>
      <div className="popup__content">
        <button className="popup__close" onClick={handleClosePopups}></button>
        <div className="popup__body popup__body_transparent">
          <img src={selectedCard?.link} alt={selectedCard?.name} className="popup__image" />
          <h2 className="popup__subtitle">{selectedCard?.name}</h2>
        </div>
      </div>
    </div>)
}