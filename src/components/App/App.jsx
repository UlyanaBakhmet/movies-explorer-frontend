import { Routes, Route, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Register from "../Register/Register";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import NotFound from "../NotFound/NotFound";
import Login from "../Login/Login";
import "./App.css";

export default function App() {
  const location = useLocation();
  const pathname = location.pathname;

  const headerRoutes = ["/", "/movies", "/saved-movies", "/profile"].includes(
    pathname
  );

  const footerRoutes = ["/", "/movies", "/saved-movies"].includes(pathname);

  return (
    <div className="page">
      {headerRoutes ? <Header /> : ""}
      <main className="main">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/saved-movies" element={<SavedMovies />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {footerRoutes ? <Footer /> : ""}
    </div>
  );
}
