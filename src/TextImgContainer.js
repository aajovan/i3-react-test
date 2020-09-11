
import React from 'react';
import './TextImgContainer.css';
function TextImgContainer({ title, imgLeft, text, imgSrc, extraContent1, extraContent2 }) {
  let p = [];
  if (text[0]) {
    text.forEach((element, index) => {
      p.push(<p key={"p" + index}>{element.text}</p>)
    });
  }

  return (
    <div className="container">

      <div className="d-flex flex-column flex-lg-row align-items-center text-center">
        <div className="d-lg-none order-1">
          <h4 className="text-primary">{title}</h4>
        </div>
        <div className={imgLeft && imgLeft === "true" ? "order-3 order-lg-3 text-display-width px-lg-5" : "order-3 order-lg-0 text-display-width px-lg-5"} >
          <div className="d-none d-lg-block pb-lg-3">
            <h4 className="text-primary">{title ? title : null}</h4>
          </div>
          <div>
            {p}
            {extraContent1 ? extraContent1 : null}
          </div>
        </div>
        <div className={imgLeft && imgLeft === "true" ? "order-2 order-lg-0" : "order-2 order-lg-2"} >
          <img className="img-display-width" src={imgSrc ? imgSrc : null} alt="slika" />
          {extraContent2 ? extraContent2 : null}
        </div>


      </div>

    </div>
  );
}

export default TextImgContainer;

