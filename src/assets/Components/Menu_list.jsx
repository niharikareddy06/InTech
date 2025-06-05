import React from "react";
import "./Menu_list.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Menu_list = () => {
  return (
    <div className="sidebar">
      <div className="icon-text">
        <i className="fa fa-home"></i>
        <span>Home</span>
      </div>
      <div className="icon-text">
        <i className="fa fa-folder"></i>
        <span>Subscriptions</span>
      </div>
      <div className="icon-text">
        <i className="fa fa-download"></i>
        <span>Downloads</span>
      </div>
      <Link to="user" style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="icon-text">
        <i className="fa fa-user"></i> 
        <span>User</span>
      </div>
      </Link>
    </div>
  );
};

export default Menu_list;
