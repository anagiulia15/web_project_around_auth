import PopupWithForm from "./PopupWithForm";

export default function PopupDelete({ handleSubmit, isOpen, handleClose }) {
  return (
    <PopupWithForm
      name="profile"
      title="¿Estas seguro?"
      handleSubmit={handleSubmit}
      isOpen={isOpen}
      handleClose={handleClose}
    >
    
    </PopupWithForm> 
  );
}
