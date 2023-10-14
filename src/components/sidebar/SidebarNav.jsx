import React, { useContext, useState } from "react";
import styles from "./sidebar.module.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Menu from "../../utils/menu.json";
import useWindowSize from "../../common/windowResize";
import { StoreContext } from "../Layout";

const SidebarNav = () => {
  const { isOpen } = useContext(StoreContext);
  const navigate = useNavigate();
  const window = useWindowSize();
  const location = useLocation();
  const activePage = Menu.find((item) => item.route === location.pathname);
  const activePageId = activePage ? activePage.route : "";
  const [isActive, setIsActive] = useState(activePageId);
  const [isExpent, setIsExpend] = useState(1);

  const menuHandle = (e, val) => {
    e.stopPropagation();
    setIsActive(val);
    setIsExpend(isExpent === val ? 1 : val);
    navigate(val);
  };

  // console.log(isExpent, "location");
  const isMobile = window.width <= 992;

  return (
    <aside
      className={`${styles.sidebar}`}
    >
      <div className={styles.brand}>
        <Link to={"/"}>
          <i className={styles.brand_icon}></i> Dashboard
        </Link>
      </div>
      <ul className={styles.menu_wrap}>
        {Menu.map((item, key) => (
          <React.Fragment key={key}>
            <li
              className={`${styles.menu_list} ${
                isActive === item.route && styles.active
              }`}
              onClick={(e) => menuHandle(e, item.route)}
            >
              <span className={styles.MainMenu_Item}>
                <i className={styles[item.iconName]}></i>
                {item.title}
              </span>
              {item.subMenu.length > 0 && (
                <i
                  className={`${
                    isExpent === item.route
                      ? styles.arrowDown
                      : styles.arrowIcon
                  }`}
                ></i>
              )}
            </li>
            {isExpent === item.route && item.subMenu.length > 0 ? (
              <ul className={styles.subMenu}>
                {item.subMenu.map((subItem, subKey) => (
                  <React.Fragment key={subKey}>
                    <Link to="#" className={styles.subList}>
                      {" "}
                      {subItem.subMenu}
                    </Link>
                  </React.Fragment>
                ))}
              </ul>
            ) : (
              ""
            )}
          </React.Fragment>
        ))}
      </ul>
    </aside>
  );
};

export default SidebarNav;
