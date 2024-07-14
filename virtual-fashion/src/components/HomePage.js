import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './HomePage.css';

const HomePage = () => {
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
    <div className="home-container">
      <header className="header">
        <button className="header-button">Virtual Try On</button>
        <button className="header-button">Virtual Runway</button>
      </header>
      <div className="content">
        <aside className="sidebar">
          <h3>Filters</h3>
          <div className="filter-section">
            <h4>Size</h4>
            <button className="filter-button">S</button>
            <button className="filter-button">M</button>
            <button className="filter-button">L</button>
            <button className="filter-button">XL</button>
          </div>
          <div className="filter-section">
            <h4>Color</h4>
            <button className="filter-button">Red</button>
            <button className="filter-button">Blue</button>
            <button className="filter-button">Green</button>
            <button className="filter-button">Black</button>
          </div>
          <div className="filter-section">
            <h4>Brand</h4>
            <button className="filter-button">Brand A</button>
            <button className="filter-button">Brand B</button>
            <button className="filter-button">Brand C</button>
            <button className="filter-button">Brand D</button>
          </div>
          <div className="filter-section">
            <h4>Price Range</h4>
            <button className="filter-button">$0-$50</button>
            <button className="filter-button">$50-$100</button>
            <button className="filter-button">$100-$200</button>
            <button className="filter-button">$200+</button>
          </div>
        </aside>
        <main className="main">
          <h2>Clothes</h2>
          <div className="clothes-grid">
            {clothes.map((item) => (
              <div key={item.id} className="clothes-item">
                <img src={`http://localhost:5000/images/${item.img}`} alt={item.name} />
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default HomePage;
