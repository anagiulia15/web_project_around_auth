import Avatar from "../images/image.jpg";
import Logo from "../images/logo.png";
import { useContext } from "react";
import { currentuserContext } from "../contexts/CurrentUserContext";
export default function Header(props) {
  const currentUser = useContext(currentuserContext);
  return (
    <header className="header">
      <div className="nav">
        <img src={Logo} alt="logotipo" className="header__logo" />
        {props.isLoggedIn && (
          <a className={"nav__link"} onClick={props.handleLogout}>
            Cerrar sesion
          </a>
        )}
      </div>

      {props.isLoggedIn && (
        <>
          <div className="profile">
            <div className="profile__avatar-container">
              <img
                src={Avatar}
                alt="foto del senor"
                className="profile__avatar"
              />
              <button
                className="profile__edit-avatar"
                onClick={props.handleEditAvatarClick}
              ></button>
            </div>
            <div className="profile__info">
              <h2 className="profile__name">{currentUser.name}</h2>
              <h3 className="profile__about">{currentUser.about}</h3>
              <button
                onClick={props.handleEditProfileClick}
                className="profile__edit-button"
              ></button>
            </div>
            <button
              className="profile__add-button"
              onClick={props.handleAddPlaceClick}
            >
              +
            </button>
          </div>
        </>
      )}
    </header>
  );
}
