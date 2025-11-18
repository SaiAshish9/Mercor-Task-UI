import React from "react";
import { SidebarContainer } from "./styles";
import LogoImg from "assets/logo.png";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <img
        src={LogoImg}
        alt="Logo"
        style={{ width: "1.8rem", height: "1.8rem", marginTop: "0.75rem", cursor: "pointer" }}
      />
    </SidebarContainer>
  );
};

export default Sidebar;
