import React from "react";
import Sidebar from "./Sidebar";
import MobileSidebar from "./mobileSidebar";
import useWindowSize from "../../common/windowResize";

const Asidebar = () => {
  const windowSize = useWindowSize();
  const isMobile = windowSize.width <= 992;

  return (isMobile ? <MobileSidebar /> : <Sidebar />);
};

export default Asidebar;
