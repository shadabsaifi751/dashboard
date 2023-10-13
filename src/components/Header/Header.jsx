import React, { useContext } from "react";
import { StoreContext } from "../Layout";
import styles from "./header.module.scss";
import useWindowSize from "../../common/windowResize";
import Humbarger from "../../assets/icons/dashboard-icons/humbergar.svg";
const Header = () => {
  const { isOpen, setIsOpen } = useContext(StoreContext);
  const windowSize = useWindowSize();
  const isMobile = windowSize.width <= 992;

  const humburgerHandle = () => {
    setIsOpen(true);
  };

  return (
    <div className={styles.header}>
      <h2>Hello Shadab Saifi👋,</h2>
      <div className={styles.search_input}>
        <i className={styles.search_icon}></i>
        <input type="text" placeholder="Search..." />
      </div>
      {isMobile && (
        <button onClick={() => humburgerHandle()} className={styles.humbergar}>
          <img src={Humbarger} />
        </button>
      )}
    </div>
  );
};

export default Header;
