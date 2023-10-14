// MobileNavigationPortal.js
import React, { useContext, useState } from "react";
import ReactDOM from "react-dom";
import styles from "./mobileStyles.module.scss";
import { StoreContext } from "../Layout";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useWindowSize from "../../common/windowResize";
import Menu from "../../utils/menu.json";

const MobileNavigation = () => {
  const { isOpen, setIsOpen, sidebarRef } = useContext(StoreContext);
  const navigate = useNavigate();
  const window = useWindowSize();
  const location = useLocation();
  const activePage = Menu.find((item) => item.route === location.pathname);
  const activePageId = activePage ? activePage.route : "";
  const [isActive, setIsActive] = useState(activePageId);
  const [isExpand, setIsExpand] = useState(1);

  const menuHandle = (e, val) => {
    setIsActive(val);
    setIsExpand(isExpand === val ? 1 : val);
    navigate(val);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  
  return (
    <React.Fragment>
      <aside
        ref={sidebarRef}
        className={`${styles.mobileSidebar} ${isOpen && styles.isOpen}`}
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
                key={key}
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
                  <i className={styles.arrowIcon}></i>
                )}
              </li>
              {isExpand === item.route && item.subMenu.length > 0 ? (
                <ul className={styles.subMenu}>
                  {item.subMenu.map((subItem, subKey) => (
                    <Link to="#" key={subKey} className={styles.subList}>
                      {" "}
                      {subItem.subMenu}
                    </Link>
                  ))}
                </ul>
              ) : (
                ""
              )}
            </React.Fragment>
          ))}
        </ul>
      </aside>
      <div
        className={`${styles.sidebarOverlay} ${isOpen ? styles.isOpen : ""}`}
        onClick={closeModal}
      />
    </React.Fragment>
  );
};

export default MobileNavigation;
