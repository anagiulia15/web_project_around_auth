import SuccessImage from "../images/suses.png";
import AlertImage from "../images/alert.png";

export default function InfoTooltip({
  isOpen,
  handleClose,
  tooltipMessage,
  isTooltipSucces = true,
}) {
  return (
    <div className={`popup popup_tooltip ${isOpen ? "popup_show" : ""}`}>
      <div className="popup__overlay" onClick={handleClose}></div>
      <div className="popup__content">
        <button className="popup__close" onClick={handleClose}></button>
        <div className="popup__body">
          <img
            className="popup__icon"
            src={isTooltipSucces ? SuccessImage : AlertImage}
          />
          <p className="popup__paragraph">{tooltipMessage}</p>
        </div>
      </div>
    </div>
  );
}
