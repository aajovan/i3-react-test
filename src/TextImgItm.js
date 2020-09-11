import React from 'react';
import './TextImgItm.css';

function TextImgItm({ imgSrc, text }) {
  let prvaRijec = "";
  let ostalo = "";
  let parts = text.split(' ');
  prvaRijec = parts[0] + " ";
  parts.shift();

  if (parts instanceof Array) {
    ostalo = parts.join(' ');
  }
  else {
    ostalo = parts;
  }

  return (
    <div className="text-center">
      <img className="img-itm-width p-2" src={imgSrc} alt="slika" />
      <p className="pt-2"><strong>{prvaRijec}</strong>{ostalo}</p>
    </div>
  )

}

export default TextImgItm;
