
import React from 'react';
import TextImgContainer from "./TextImgContainer"
import TextImgContainer2 from "./TextImgContainer2"
import TextImgItm from "./TextImgItm";

function DrugaDEMO({ data }) {
  console.log(data)
  let contentItems = [];
  if (data.podaci2.odlomci[0]) {
    data.podaci2.odlomci.forEach((element, index) => {
      contentItems.push(
        <TextImgItm imgSrc={element.imgSrc} text={element.text} key={"odlomak" + index} />
      )
    });
  }
  return (
    <TextImgContainer
      title={data.podaci1.naslov}
      extraContent1={<TextImgContainer2 mobileSize="1" desktopSize="3" data={contentItems} />}
      // extraContent2={<TextImgContainer2/>}
      imgLeft="true"
      imgSrc={data.podaci1.slike[0].src}
      text={data.podaci1.paragraf} />
  );
}

export default DrugaDEMO;
