import React, {
  createContext,
  useState,
} from "react";
import styles from "./main.module.scss";
import useWindowSize from "../../common/windowResize";
import Main from "../Main/Main";
import Asidebar from "../sidebar";
// import MobileSidebar from '../sidebar/MobileSidebar';

export const StoreContext = createContext(null);

const Layout = () => {
  const windowSize = useWindowSize();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StoreContext.Provider
      value={{
        isOpen,
        setIsOpen
      }}
    >
      <div className={styles.header_layout}>
        <Asidebar />
        <Main/>
      </div>
    </StoreContext.Provider>
  );
};

export default Layout;
