import React, { useContext, useState } from "react";
import styles from "./sidebar.module.scss";
import { StoreContext } from "../Layout";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useWindowSize from "../../common/windowResize";
import Menu from "../../utils/menu.json";

const MobileSidebar = () => {
  const { isOpen, setIsOpen } = useContext(StoreContext);
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

  const outSidehandle = () => {
    setIsOpen(false);
  };
  // console.log(isExpent, "location");
  const isMobile = window.width <= 992;

  return (
    <div
      className={`${styles.sidebarOverlay} ${isOpen ? styles.isOpen : ""}`}
      onClick={outSidehandle}
    >
      <aside
        className={`${styles.sidebar} ${isMobile && styles.isMobile} ${
          isOpen && styles.isOpen
        }`}
      >
        <div className={styles.brand}>
          <Link to={"/"}>
            <i className={styles.brand_icon}></i> Dashboard
          </Link>
        </div>
        <ul className={styles.menu_wrap}>
          {Menu.map((item, key) => (
            <>
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
              {isExpent === item.route && item.subMenu.length > 0 ? (
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
            </>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default MobileSidebar;
