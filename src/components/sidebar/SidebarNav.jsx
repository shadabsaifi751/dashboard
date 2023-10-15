import React, { useContext, useRef, useState } from "react";
import styles from "./sidebar.module.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Menu from "../../utils/menu.json";
import useWindowSize from "../../common/windowResize";
import { StoreContext } from "../Layout";
import { useDetectOutsideClick } from "../../common/useOutsideClick/useDetectOutsideClick";

const SidebarNav = () => {
  const { isOpen, setIsOpen } = useContext(StoreContext);
  const navigate = useNavigate();
  const dropRef = useRef();
  const window = useWindowSize();
  const location = useLocation();
  const activePage = Menu.find((item) => item.route === location.pathname);
  const activePageId = activePage ? activePage.route : "";
  const [isActive, setIsActive] = useState(activePageId);
  const [isExpent, setIsExpend] = useState(1);
  const [isDrop, setIsDrop] = useDetectOutsideClick(dropRef, false);

  const menuHandle = (e, val) => {
    e.stopPropagation();
    setIsActive(val);
    setIsExpend(isExpent === val ? 1 : val);
    navigate(val);
    setIsOpen(false);
  };

  function dropHandle() {
    setIsDrop(!isDrop);
  }

  return (
    <aside className={`${styles.sidebar}`}>
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
      <div className={styles.user_profile} ref={dropRef}>
        <button className={styles.profile_button} onClick={dropHandle}>
          <div className={styles.info_wrap}>
            <img
              className="w-8 h-8 rounded-full"
              src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
              alt="user photo"
            />
            <div className={styles.user_body}>
              <h4>Shadab Saifi</h4>
              <h6>Project Manager</h6>
            </div>
          </div>
          
          <i className={`${ isDrop ? styles.arrowUp : styles.arrowDown}`}></i>
        </button>

        {isDrop && (
          <ul className={styles.dropdown}>
            <li className={styles.item}>
              <Link to="#">Dashboard</Link>
            </li>
            <li className={styles.item}>
              <Link
                to="#"
                className="block px-4 py-2 hover-bg-gray-100 dark-hover-bg-gray-600 dark-hover-text-white"
              >
                Settings
              </Link>
            </li>
            <li className={styles.item}>
              <a
                href="#"
                className="block px-4 py-2 hover-bg-gray-100 dark-hover-bg-gray-600 dark-hover-text-white"
              >
                Sign out
              </a>
            </li>
          </ul>
        )}
      </div>
    </aside>
  );
};

export default SidebarNav;
