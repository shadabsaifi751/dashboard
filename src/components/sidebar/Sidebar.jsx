import React, { useContext, useState } from "react";
import styles from "./sidebar.module.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Menu from "../../utils/menu.json";
import useWindowSize from "../../common/windowResize";
import MobileSidebar from "./mobileSidebar";
import { StoreContext } from "../Layout";

const Sidebar = () => {
  const { isOpen } = useContext(StoreContext);
  const navigate = useNavigate();
  const window = useWindowSize();
  const location = useLocation();
  const activePage = Menu.find((item) => item.route === location.pathname);
  const activePageId = activePage ? activePage.route : "";
  const [isActive, setIsActive] = useState(activePageId);

  const menuHandle = (val) => {
    setIsActive(val);
    navigate(val);
  };

  // console.log(activePage,"location")
  const isMobile = window.width <= 992;

  return (
    <aside className={`${styles.sidebar} ${isMobile && styles.isMobile} ${isOpen && styles.isOpen}`} >
      <div className={styles.brand}>
        <Link to={"/"}>
          <i className={styles.brand_icon}></i> Dashboard
        </Link>
      </div>
      <ul className={styles.menu_wrap}>
        {Menu.map((item, key) => (
          <li
            key={key}
            className={`${styles.menu_list} ${
              isActive === item.route && styles.active
            }`}
            onClick={() => menuHandle(item.route)}
          >
            <i className={styles[item.iconName]}></i>
            <span>{item.title}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
