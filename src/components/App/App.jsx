import React from "react";
import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Profile from "../Profile/Profile";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Footer from "../Footer/Footer";
import NotFound from "../NotFound/NotFound";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;

  const headerRoutes =
    pathname === "/" ||
    pathname === "/movies" ||
    pathname === "/saved-movies" ||
    pathname === "/profile";
    
  const footerRoutes =
    pathname === "/" || pathname === "/movies" || pathname === "/saved-movies";

  function toggleMenu() {
    setIsLoggedIn((prevState) => !prevState);
  }

  return (
    <div className="root">
      <div className="page">
        {headerRoutes ? <Header isLoggedIn={isLoggedIn} /> : ""}
        <main className="main">
          <Routes>
            <Route path="/" index={true} element={<Main />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/signin" element={<Login toggleMenu={toggleMenu} />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/saved-movies" element={<SavedMovies />} />
            <Route
              path="/profile"
              element={<Profile toggleMenu={toggleMenu} />}
            />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </main>
        {footerRoutes ? <Footer /> : ""}
      </div>
    </div>
  );
}
