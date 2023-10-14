import React from "react";
import useWindowSize from "../../common/windowResize";
import SidebarNav from "./SidebarNav";
import MobileNavigation from "./MobileNavigation";

const Asidebar = () => {
  const windowSize = useWindowSize();
  const isMobile = windowSize.width <= 992;

  return <>{isMobile ? <MobileNavigation /> : <SidebarNav />}</>;
};

export default Asidebar;
