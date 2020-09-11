
import React from 'react';
import './SliderItm.css';

function SliderItm({ main, title, imgSrc }) {
  return (
    <div className="d-flex flex-column align-items-center">
      <div className="d-flex flex-column align-items-center rounded-circle slider-img" style={{ backgroundImage: "url(" + imgSrc + ")" }}>
        <h4 className="text-white my-auto text-center mx-2 font-weight-bold">{main}</h4>
      </div>
      <h4 className="text-center pt-4 text-primary text-uppercase font-weight-bold slider-text">{title}</h4>
    </div>
  );
}

export default SliderItm;
