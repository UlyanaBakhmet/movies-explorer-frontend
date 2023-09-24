import { useState } from "react";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";
import "./Header.css";

export default function Header() {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  function handleMobNav() {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  }

  return (
    <header className="header">
      <Logo />
      <Navigation />
      <button className="header__burger" onClick={handleMobNav} />
      <BurgerMenu isActive={isBurgerMenuOpen} handlerClose={handleMobNav} />
    </header>
  );
}
