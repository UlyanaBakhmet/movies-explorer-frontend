class MainApi {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  _checkResult(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }

  addMovie(movieData) {
    const token = localStorage.getItem("token");
    return fetch(`${this._baseUrl}/movies`, {
      method: "POST",
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...movieData,
      }),
    }).then((res) => this._checkResult(res));
  }

  deleteMovie(movieId) {
    const token = localStorage.getItem("token");
    return fetch(`${this._baseUrl}/movies/${movieId}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }).then((res) => this._checkResult(res));
  }

  getMovies() {
    const token = localStorage.getItem("token");
    return fetch(`${this._baseUrl}/movies`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }).then((res) => this._checkResult(res));
  }

  getUserInfo() {
    const token = localStorage.getItem("token");
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }).then((res) => this._checkResult(res));
  }

  editUserInfo({ name, email }) {
    const token = localStorage.getItem("token");
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
      }),
    }).then((res) => this._checkResult(res));
  }

  saveMovies(data) {
    const token = localStorage.getItem("token");
    return fetch(`${this._baseUrl}/movies`, {
      method: "POST",
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: data.image,
        trailerLink: data.trailerLink,
        thumbnail: data.thumbnail,
        movieId: data.movieId,
        nameRU: data.nameRU,
        nameEN: data.nameEN,
      }),
    }).then((res) => this._checkResult(res));
  }

  getSavedMovies() {
    const token = localStorage.getItem("token");
    return fetch(`${this._baseUrl}/movies`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }).then((res) => this._checkResult(res));
  }
}

export const mainApi = new MainApi({
  baseUrl: "http://localhost:3000",
  // baseUrl: "https://api.bakhmet-movies.nomoredomainsmonster.ru",
});
