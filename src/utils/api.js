class Api {
    constructor(url, token) {
      this._url = url;
      this._token = token;
    }
  
    getCards() {
      return fetch(`${this._url}/cards`, {
        method: "GET",
        headers: {
          authorization: this._token,
          "Content-Type": "application/json",
        },
      }).then((response) => response.json());
    }
  
    storeCard(name, link) {
      return fetch(`${this._url}/cards`, {
        method: "POST",
        headers: {
          authorization: this._token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({name, link})
      }).then((response) => response.json());
    }
  
    getUserinfo() {
      return fetch(`${this._url}/users/me`, {
        method: "GET",
        headers: {
          authorization: this._token,
          "Content-Type": "application/json",
        },
      }).then((response) => response.json());
    }
  
    updateUser(name, about) {
      return fetch(`${this._url}/users/me`, {
        method: "PATCH",
        headers: {
          authorization: this._token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          about,
        }),
      }).then((response) => response.json());
    }
    updateAvatar(avatar) {
      return fetch(`${this._url}/users/me`, {
        method: "PATCH",
        headers: {
          authorization: this._token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({avatar}),
      }).then((response) => response.json());
    }
  
    deleteCard(cardId) {
      return fetch(`${this._url}/cards/${cardId}`, {
        method: "DELETE",
        headers: {
          authorization: this._token,
          "Content-Type": "application/json",
        },
      }).then((response) => response.json());
    }
    addLike(cardId) {
      return fetch(`${this._url}/cards/${cardId}/likes/`, {
        method: "PUT",
        headers: {
          authorization: this._token,
          "Content-Type": "application/json",
        },
      }).then((response) => response.json());
    }
    removeLike(cardId) {
      return fetch(`${this._url}/cards/${cardId}/likes/`, {
        method: "DELETE",
        headers: {
          authorization: this._token,
          "Content-Type": "application/json",
        },
      }).then((response) => response.json());
    }
  }
  
  const api = new Api(
  //  `https://around.nomoreparties.co/v1/web_es_10`,
  //  `92699bb5-75ce-4d70-95e1-51dbc7b5449b`
  'https://around-api.es.tripleten-services.com/v1',
  '5f012dc4-1566-4ac2-85ab-d90fd7fb66ea'
  );
  
  export default api;
  