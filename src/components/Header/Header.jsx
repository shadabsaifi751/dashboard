import { useContext, useRef } from "react";
import { StoreContext } from "../Layout";
import styles from "./styleheader.module.scss";
import useWindowSize from "../../common/windowResize";
import { useDetectOutsideClick } from "../../common/useOutsideClick/useDetectOutsideClick";
import { Link } from "react-router-dom";

const Header = () => {
  const dropRef = useRef(null);
  const { setIsOpen } = useContext(StoreContext);
  const [isDropdown, setIsDropdown] = useDetectOutsideClick(dropRef, false);
  const windowSize = useWindowSize();
  const isMobile = windowSize.width <= 992;
  const isDesktop = windowSize.width >= 992;

  const humburgerHandle = () => {
    setIsOpen(true);
  };

  const dropdownHandle = () => {
    setIsDropdown(!isDropdown);
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
        <div className={styles.user_profile_wrap}>
          <div className={styles.user_wrap} ref={dropRef}>
            <button
              className={styles.userprofile}
              type="button"
              onClick={dropdownHandle}
            >
              <img
                className="w-8 h-8 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                alt="user photo"
              />
            </button>
            {isDropdown ? (
              <div className={styles.dropdown}>
                <div className={styles.drop_body}>
                  <h4>Shadab Saifi</h4>
                  <h5 className="font-medium truncate">
                    shadabsaifi749@gmail.com
                  </h5>
                </div>
                <ul
                  className={styles.drop_wrap}
                  aria-labelledby="dropdownUserAvatarButton"
                >
                  <li className={styles.item}>
                    <Link to="#">Dashboard</Link>
                  </li>
                  <li className={styles.item}>
                    <Link to="#">Settings</Link>
                  </li>
                  <li className={styles.item}>
                    <Link to="#">Sign out</Link>
                  </li>
                </ul>
              </div>
            ) : (
              ""
            )}
          </div>

          <button
            onClick={() => humburgerHandle()}
            className={styles.humbergar}
          >
            <span className={styles.lines}></span>
            <span className={styles.lines}></span>
            <span className={styles.lines}></span>
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
