import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { mainApi } from "../../utils/MainApi";
import * as auth from "../../utils/Auth";
import { moviesApi } from "../../utils/MoviesApi";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Profile from "../Profile/Profile";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Footer from "../Footer/Footer";
import NotFound from "../NotFound/NotFound";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import InfoPopup from "../InfoPopup/InfoPopup";
import success from "../../images/success.svg";
import error from "../../images/error.svg";
import { SERVER_URL } from "../../utils/constants";
import "./App.css";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { pathname } = useLocation();
  const [currentUserValues, setCurrentUserValues] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [okMessage, setOkMessage] = useState("");
  const [ServerError, setServerError] = useState({});
  const [infoPopup, setInfoPopup] = useState(false);
  const [popupImage, setPopupImage] = useState("");
  const [popupTitle, setPopupTitle] = useState("");
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const navigate = useNavigate();
  const handleError = (err) => console.error(`Возникла ошибка ${err}`);

  const headerRoutes = ["/", "/movies", "/saved-movies", "/profile"].includes(
    pathname
  );

  const footerRoutes = ["/", "/movies", "/saved-movies"].includes(pathname);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      auth
        .getToken(token)
        .then((res) => {
          if (res) {
            setIsLoggedIn(true);
            navigate(pathname);
          }
        })
        .catch(handleError);
    }
  }, []);

  useEffect(() => {
    isLoggedIn &&
      Promise.all([mainApi.getUserInfo(), mainApi.getSavedMovies()])
        .then(([profileUserInfo, savedMovies]) => {
          setCurrentUserValues(profileUserInfo);
          setIsLoading(false);
          setSavedMovies(savedMovies);
        })
        .catch(() => {
          setIsLoading(false);
          setPopupImage(error);
          setPopupTitle("Произошла ошибка, поробуйте еще раз.");
          handleInfoTooltip();
        });
  }, [isLoggedIn]);

  //регистрация
  function handleRegister({ name, email, password }) {
    auth
      .register({ name, email, password })
      .then(() => {
        setPopupImage(success);
        setPopupTitle("Вы успешно зарегистрировались!");
        handleLogin({ email: email, password: password });
      })
      .catch((err) => {
        if (err === "409 Conflict") {
          setPopupImage(error);
          setPopupTitle("Что-то пошло не так! Попробуйте еще раз.");
        } else {
          setPopupImage(error);
          setPopupTitle("Такой пользователь уже сущетсвует.");
          handleError(err);
        }
      })
      .finally(handleInfoTooltip);
  }

  //вход
  function handleLogin({ email, password }) {
    setIsLoading(true);
    auth
      .authorize({ email, password })
      .then((confirm) => {
        if (confirm.token) {
          setCurrentUserValues({ email, password });
          localStorage.setItem("token", confirm.token);
          setIsLoggedIn(true);
          setPopupImage(success);
          setPopupTitle("Успешно!");
          navigate("/movies", { replace: true });
        }
      })
      .catch((err) => {
        if (err === "401 Unauthorized") {
          setPopupImage(error);
          setPopupTitle("Что-то пошло не так! Попробуйте еще раз.");
        } else {
          setPopupImage(error);
          setPopupTitle("Ошибка авторизации! Неправильная почта или пароль.");
          handleError(err);
        }
      })
      .finally(handleInfoTooltip);
  }

  //обновление данных
  function handleUpdateUser({ name, email }) {
    setIsLoading(true);
    mainApi
      .editUserInfo({ name, email })
      .then((res) => {
        setCurrentUserValues(res);
        setTimeout(() => {
          setOkMessage(true);
        }, 3000);
      })
      .catch((err) => {
        setServerError(err);
        setOkMessage(false);
      });
  }

  function handleInfoTooltip() {
    setInfoPopup(true);
  }

  function closeAllPopups() {
    setInfoPopup(false);
  }

  function handlePopupCloseClick(evt) {
    if (evt.target.classList.contains("popup_opened")) {
      closeAllPopups();
    }
  }

  //все фильмы
  function handleGetAllMovies(preloader) {
    preloader(true);
    moviesApi
      .getInitialMovies()
      .then((data) => {
        setMovies(data);
        localStorage.setItem("allMovies", JSON.stringify(data));
      })
      .catch((err) => {
        console.log(err);
        setPopupTitle("Что-то пошло не так! Попробуйте еще раз.");
        `Ошибка сервера ${err}`;
      })
      .finally(() => {
        preloader(false);
      });
  }

  //сохранение фильма
  const handleSaveMovie = (movie, setIsSaved) => {
    const objMovie = {
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: SERVER_URL + movie.image.url,
      trailerLink: movie.trailerLink,
      thumbnail: SERVER_URL + movie.image.url,
      movieId: movie.id,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
    };
    mainApi
      .saveMovies(objMovie)
      .then((objMovie) => {
        setSavedMovies([objMovie, ...savedMovies]);
      })
      .then(() => {
        setIsSaved(true);
      })
      .catch((err) => {
        setPopupTitle(`Ошибка сервера ${err}`);
      });
  };

  //удаление фильма
  const handleDeleteMovie = (movie, setIsSaved) => {
    mainApi
      .deleteMovie(movie._id)
      .then(() => {
        setSavedMovies((state) =>
          state.filter((c) => c._id !== movie._id && c)
        );
      })
      .then(() => {
        setIsSaved(false);
      })
      .catch((err) => {
        setPopupTitle(`Ошибка сервера ${err}`);
      });
  };

  function handleSignOut() {
    setIsLoggedIn(false);
    navigate("/", { replace: true });
    localStorage.clear();
  }

  return (
    <div className="root">
      <CurrentUserContext.Provider value={currentUserValues}>
        <div className="page">
          {headerRoutes ? <Header isLoggedIn={isLoggedIn} /> : ""}
          <main className="main">
            <Routes>
              <Route path="/" index={true} element={<Main />} />

              <Route
                path="/signup"
                element={
                  <Register
                    isLoading={isLoading}
                    handleRegister={handleRegister}
                    isLoggedIn={isLoggedIn}
                    ServerError={ServerError}
                  />
                }
              />

              <Route
                path="/signin"
                element={
                  <Login handleLogin={handleLogin} isLoggedIn={isLoggedIn} />
                }
              />

              <Route element={<ProtectedRoute isLoggedIn={isLoggedIn} />}>
                <Route
                  path="/movies"
                  element={
                    <Movies
                      movies={movies}
                      getInitialMovies={handleGetAllMovies}
                      setMovies={setMovies}
                      isLoggedIn={isLoggedIn}
                      savedMovies={savedMovies}
                      handleSaveMovie={handleSaveMovie}
                      handleDeleteMovie={handleDeleteMovie}
                    />
                  }
                />

                <Route
                  path="/saved-movies"
                  element={
                    <SavedMovies
                      isLoggedIn={isLoggedIn}
                      savedMovies={savedMovies}
                      handleDeleteMovie={handleDeleteMovie}
                    />
                  }
                />

                <Route
                  path="/profile"
                  element={
                    <Profile
                      isLoggedIn={isLoggedIn}
                      handleSignOut={handleSignOut}
                      onUpdateUser={handleUpdateUser}
                      setOkMessage={setOkMessage}
                      okMessage={okMessage}
                    />
                  }
                />
              </Route>

              <Route path="/*" element={<NotFound isLoggedIn={isLoggedIn} />} />
            </Routes>
            <InfoPopup
              image={popupImage}
              title={popupTitle}
              isOpen={infoPopup}
              onCloseClick={handlePopupCloseClick}
              onClose={closeAllPopups}
            />
          </main>
          {footerRoutes ? <Footer /> : ""}
        </div>
      </CurrentUserContext.Provider>
    </div>
  );
}
