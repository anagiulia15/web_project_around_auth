import { useContext } from "react";
import { currentuserContext } from "../contexts/CurrentUserContext";
export default function Card({ card, setSelectCard, onDelete, onLike }) {
  const currentUser = useContext(currentuserContext);
  // Verificando si el usuario actual es el propietario de la tarjeta actual



  // Crea una variable que después establecerás en `className` para el botón like
  

  // Creando una variable que después establecerás en `className` para el botón eliminar
  
  

  function handleClick() {
    setSelectCard(card);
  }

  function handleDelete() {
    onDelete(card);
  }

  function handleLike() {
    onLike(card);
  }

  const hasUserLike = () => {
    return card.isLiked;
    //return card.likes.some((like) => like._id === currentUser._id);
  };

  const isOwner = () => {
    return card.owner === currentUser._id;
  };

  return (
    <div className="element">
      {isOwner() ? (
        <button className="element__trash" onClick={handleDelete}></button>
      ) : null}
      <img
        src={card.link}
        alt=""
        className="element__image"
        onClick={handleClick}
      />
      <div className="element__footer">
        <p className="element__name">{card.name}</p>
        <button
          className={`element__heart ${
            hasUserLike() ? "element__heart_active" : ""
          }`}
          onClick={handleLike}
        ></button>
        {/*<p className="element__counter">{card.likes.length}</p>*/}
      </div>
    </div>
  );
}
