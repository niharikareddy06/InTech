import React from 'react';
import './Videoupload.css';

const UploadModal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Upload Video</h2>
        <input type="file" accept="video/*" />
        <input type="text" placeholder="Title" />
        <textarea placeholder="Description"></textarea>
        <div className="modal-actions">
          <button onClick={onClose}>Cancel</button>
          <button>Upload</button>
        </div>
      </div>
    </div>
  );
};

export default UploadModal;
