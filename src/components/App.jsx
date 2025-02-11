import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import ImagePopup from "./ImagePopup";
import { useState, useEffect } from "react";
import { currentuserContext } from "../contexts/CurrentUserContext";
import api from "../utils/api";
import auth from "../utils/auth";
import EditProfile from "./EditProfile";
import EditAvatar from "./EditAvatar";
import NewCard from "./NewCard";
import PopupDelete from "./PopupDelete";
import Popup from "./Popup";
import { Routes, Route } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import InfoTooltip from "./InfoTooltip";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  const [isEditProfilePopupOpen, setisEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setisAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setisEditAvatarPopupOpen] = useState(false);
  const [isPopupDeleteOpen, setisPopupDeleteOpen] = useState(false);
  const [isImageOpen, setImageOpen] = useState(false);
  const [selectedCard, setselectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [isTooltipOpen, setisTooltipOpen] = useState(false);
  const [hasTooltiperror] = useState(false);
  const [cards, setCards] = useState([]);

  function handleDelete(card) {
    setisPopupDeleteOpen(true);
    setselectedCard(card);
  }

  function onDelete() {
    api
      .deleteCard(selectedCard._id)
      .then(() => {
        setisPopupDeleteOpen(false);
        return api.getCards();
      })
      .then((elements) => {
        setCards(elements);
      });
  }

  function handleLike(card) {
    const userLike = card.isLiked;
    if (userLike) {
      api.removeLike(card._id).then((newCard) => {
        console.log(newCard);
        const cardFound = cards.find((item) => card._id === item._id);
        cardFound.isLiked = newCard.isLiked;
        setCards([...cards]);
      });
    } else {
      api.addLike(card._id).then((newCard) => {
        console.log(newCard);
        const cardFound = cards.find((item) => card._id === item._id);
        cardFound.isLiked = newCard.isLiked;
        setCards([...cards]);
      });
    }
  }

  /*
  useEffect(() => {
    api.getCards().then((cards) => {
      setCards(cards);
    });
  }, []);*/

  useEffect(() => {
    if (isLoggedIn) {
      api.getUserinfo().then((user) => {
        setCurrentUser(user);
        api.getCards().then((cards) => {
          setCards(cards);
        });
      });
    }
  }, [isLoggedIn]);

  function handleAddPlaceSubmit(name, link) {
    api.storeCard(name, link).then((card) => {
      setCards([card, ...cards]);
      setisAddPlacePopupOpen(false);
    });
  }
  function handleEditAvatarClick() {
    setisEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    setisEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setisAddPlacePopupOpen(true);
  }

  function handleClosePopups() {
    setisEditAvatarPopupOpen(false);
    setisAddPlacePopupOpen(false);
    setisEditProfilePopupOpen(false);
    setisEditProfilePopupOpen(false);
    setisPopupDeleteOpen(false);
    setImageOpen(false);
  }
  /*
  useEffect(() => {
    api.getUserinfo().then((user) => {
      setCurrentUser(user);
    });
  }, []);*/

  function onUpdateUser({ name, about }) {
    api.updateUser(name, about).then((user) => {
      setCurrentUser(user);
      handleClosePopups();
    });
  }

  const handleRegistration = ({ email, password }) => {
    auth.signup(email, password).then((result) => {
      if (result.error) {
        setisTooltipOpen(true);
      } else {
        setisTooltipOpen(false);
      }
    });
  };

  const handleLogin = ({ email, password }) => {
    auth.signin(email, password).then((result) => {
      if (!result.error) {
        localStorage.setItem("token", result.error);
        setisLoggedIn(true);
      }
    });
  };

  return (
    <currentuserContext.Provider value={currentUser}>
      <div className="page">
        <Header
          handleEditAvatarClick={handleEditAvatarClick}
          handleEditProfileClick={handleEditProfileClick}
          handleAddPlaceClick={handleAddPlaceClick}
          isLoggedIn={isLoggedIn}
        />
        <Routes>
          <Route path="/signin" element={<Login handleLogin={handleLogin} />} />
          <Route
            path="/signup"
            element={<Register handleRegistration={handleRegistration} />}
          />
          <Route path="/login" element={<Login handleLogin={handleLogin} />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Main
                  cards={cards}
                  handleDelete={handleDelete}
                  handleLike={handleLike}
                  setSelectCard={(element) => {
                    setselectedCard(element);
                    setImageOpen(true);
                  }}
                />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Footer />
        <ImagePopup
          selectedCard={selectedCard}
          open={isImageOpen}
          handleClosePopups={handleClosePopups}
        />

        <EditProfile
          isEditProfilePopupOpen={isEditProfilePopupOpen}
          onUpdateUser={onUpdateUser}
          handleClosePopups={handleClosePopups}
        />
        <EditAvatar
          isEditProfilePopupOpen={isEditAvatarPopupOpen}
          onUpdateUser={onUpdateUser}
          handleClosePopups={handleClosePopups}
        />

        <NewCard
          isOpen={isAddPlacePopupOpen}
          handleClosePopups={handleClosePopups}
          onAddPlaceSubmit={handleAddPlaceSubmit}
        />

        <PopupDelete
          handleSubmit={onDelete}
          isOpen={isPopupDeleteOpen}
          handleClose={handleClosePopups}
        />
        <Popup />
        {isTooltipOpen && <InfoTooltip hasTooltiperror={hasTooltiperror} />}
      </div>
    </currentuserContext.Provider>
  );
}
export default App;
