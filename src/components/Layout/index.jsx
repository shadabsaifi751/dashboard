import React, { createContext, useRef, useState } from "react";
import styles from "./main.module.scss";
import useWindowSize from "../../common/windowResize";
import Main from "../Main/Main";
import SidebarNav from "../Sidebar/SidebarNav";
import MobileNavigation from "../Sidebar/MobileNavigation";
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
        sidebarRef,
      }}
    >
      <div className={styles.header_layout}>
        {windowSize.width > 992 ? <SidebarNav /> : <MobileNavigation />}
        <Main />
      </div>
    </StoreContext.Provider>
  );
};

export default Layout;
