import React from "react";
import MobileNavigation from "./MobileNavigation";
import useWindowSize from "../../common/windowResize";
import SidebarNav from "./SidebarNav";

const Asidebar = () => {
  const windowSize = useWindowSize();
  const isMobile = windowSize.width <= 992;

  return <>{isMobile ? <MobileNavigation /> : <SidebarNav />}</>;
};

export default Asidebar;
