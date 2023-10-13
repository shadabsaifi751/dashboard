import React, { useContext, useState } from "react";
import Sidebar from "./Sidebar";
import styles from "./sidebar.module.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Menu from "../../utils/menu.json";
import useWindowSize from "../../common/windowResize";
import { StoreContext } from "../Layout";

const MobileSidebar = () => {
  const { isOpen, setIsOpen } = useContext(StoreContext);

  const outSidehandle = () => {
    setIsOpen(false);
  };

  return (
    <div
      className={`${styles.sidebarOverlay} ${isOpen ? styles.isOpen : ""}`}
      onClick={outSidehandle}
    >
      <Sidebar />
    </div>
  );
};

export default MobileSidebar;
