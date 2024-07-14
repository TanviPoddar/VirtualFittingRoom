import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './VirtualTryOn.css';

const VirtualTryOn = () => {
  const [clothes, setClothes] = useState([]);

  useEffect(() => {
    const fetchClothes = async () => {
      try {
        const res = await axios.get('http://localhost:5000/clothes');
        setClothes(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchClothes();
  }, []);

  return (
    <div className="virtual-try-on-container">
      <header className="virtual-try-on-header">
        Virtual Try On
      </header>
      <div className="content-wrapper">
        <div className="clothes-grid">
          {clothes.map((item) => (
            <div key={item._id} className="clothes-item">
              <div className="try-on-button">Try On</div>
              <img src={`http://localhost:5000/images/${item.img}`} alt={item.name} />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
        <div className="grey-box">
          {/* Content for the grey box */}
          <div className="grey-box-buttons">
            <button className="grey-box-button">Edit Your Avatar</button>
            <button className="grey-box-button">Create Your Own Look</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtualTryOn;
