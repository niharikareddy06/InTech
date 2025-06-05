import React from "react";
import Navbar from "./Nav_bar";
import Menu_list from "./Menu_list";

const Layout = ({ children, onCreateClick }) => {
  return (
    <>
      <div>
        <Navbar onCreateClick={onCreateClick} />
        <div style={{ marginLeft: "80px", marginTop: "60px", padding: "20px" }}>
          {children}
        </div>
      </div>
      <Menu_list />
    </>
  );
};

export default Layout;
