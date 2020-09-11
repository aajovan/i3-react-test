import React from 'react';

function TextImgContainer2({ mobileSize, desktopSize, data }) {

  let mobile = parseInt(mobileSize, 10) ? Math.floor(parseInt(12 / mobileSize), 10) : 6;
  let desktop = parseInt(desktopSize, 10) ? parseInt(Math.floor(12 / desktopSize), 10) : 4;
  let dataItems = [];

  if (data[0]) {
    data.forEach((element, index) => {
      dataItems.push(
        <div className={`p-3 ${"col-" + mobile} ${"col-lg-" + desktop}`} key={"TextImgContainer2_" + index}>
          {element}
        </div>
      )
    });
  }
  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        {dataItems}
      </div>
    </div>
  )

}

export default TextImgContainer2;
