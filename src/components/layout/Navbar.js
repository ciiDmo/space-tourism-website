import { Link } from "react-router-dom";
import { useState } from "react";

import styles from "./Navbar.module.css";

import hopeStar from "../../img/hope-star.svg";

function Navbar({
  customHome,
  customDestination,
  customCrew,
  customTechnology,
}) {
  const [burgerMenu, setBurgerMenu] = useState('burgerEnter');
  const [showNav, setShowNav] = useState('menuOff')

  function changeMenu() {
    if(burgerMenu==='burgerEnter') {
      setBurgerMenu('burgerExit')
      setShowNav('menuOn')
      console.log(burgerMenu)
    } else {
      setBurgerMenu('burgerEnter')
      setShowNav('menuOff')
      console.log(burgerMenu)
    }

  }

  return (
    <nav className={styles.main}>
      <img src={hopeStar} alt="Hope Star" />
      <div className={styles.line}></div>
      <div
        className={`${styles.burger} ${styles[burgerMenu]}`}
        onClick={changeMenu}
      ></div>
      <ul className={`${styles.menu} ${styles[showNav]}`}>
        <li data-testid="home-itemlist" className={`${styles.direction} ${styles[customHome]}`}>
          <Link to="/" className={`${styles.tagA}`}>
            <strong>00 </strong>HOME
          </Link>
        </li>
        <li data-testid="destination-itemlist" className={`${styles.direction} ${styles[customDestination]}`}>
          <Link to="/Destination" className={`${styles.tagA}`}>
            <strong>01 </strong>DESTINATION
          </Link>
        </li>
        <li data-testid="crew-itemlist" className={`${styles.direction} ${styles[customCrew]}`}>
          <Link to="/Crew" className={`${styles.tagA}`}>
            <strong>02 </strong>CREW
          </Link>
        </li>
        <li data-testid="tech-itemlist" className={`${styles.direction} ${styles[customTechnology]}`}>
          <Link to="/Technology" className={`${styles.tagA}`}>
            <strong>03 </strong>TECHNOLOGY
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
