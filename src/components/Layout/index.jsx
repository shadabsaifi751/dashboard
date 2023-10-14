import React, { createContext, useEffect, useRef, useState } from "react";
import styles from "./main.module.scss";
import useWindowSize from "../../common/windowResize";
import Main from "../Main/Main";
import Asidebar from "../sidebar";
import { useDetectOutsideClick } from "../../common/useOutsideClick/useDetectOutsideClick";
// import MobileSidebar from '../sidebar/MobileSidebar';

export const StoreContext = createContext(null);

const Layout = () => {
  const sidebarRef = useRef(null);
  const windowSize = useWindowSize();
  const [isOpen, setIsOpen] = useState(false);

  console.log(sidebarRef, isOpen, "sidebarRef");

  return (
    <StoreContext.Provider
      value={{
        isOpen,
        setIsOpen,
        sidebarRef
      }}
    >
      <div id="portal-root"></div>
      <div className={styles.header_layout}>
        <Asidebar />
        <Main />
      </div>
    </StoreContext.Provider>
  );
};

export default Layout;
