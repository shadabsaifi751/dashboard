import React, { useContext } from "react";
import { StoreContext } from "../Layout";
import styles from "./styleheader.module.scss";
import useWindowSize from "../../common/windowResize";
import Humbarger from "../../assets/icons/dashboard-icons/humbergar.svg";


const Header = () => {
  const { isOpen, setIsOpen } = useContext(StoreContext);
  const windowSize = useWindowSize();
  const isMobile = windowSize.width <= 992;
  const isDesktop = windowSize.width >= 992;

  const humburgerHandle = () => {
    setIsOpen(true);
  };

  return (
    <header className={styles.header}>
      {isDesktop && <h2>Hello, Shadab Saifi👋</h2>}
      {windowSize.width >= 580 && <div></div>}
      <div className={styles.search_input}>
        <i className={styles.search_icon}></i>
        <input
          type="text"
          placeholder="Search..."
          className={styles.form_control}
        />
      </div>
      {isMobile && (
        <button onClick={() => humburgerHandle()} className={styles.humbergar}>
          <img src={Humbarger} />
        </button>
      )}
    </header>
  );
};

export default Header;
