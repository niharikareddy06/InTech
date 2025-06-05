import React, { useState } from "react";
import './Nav_bar.css';
import UploadModal from "../Createvideo/Videoupload";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false); 

  return (
    <div className="navbar">
      <div className="left">
        <i className="fa fa-bars"></i>
        <h2>InTech</h2>
      </div>

      <div className="center">
        <input type="text" placeholder="Search" />
        <button><i className="fa fa-search"></i></button>
      </div>

      <div className="right">
        <button onClick={() => setShowModal(true)}>
          <i className="fa fa-plus"></i> Create
        </button>
      </div>

      
      {showModal && (
        <UploadModal onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default Navbar;
