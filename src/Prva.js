
import React from 'react';
import SliderImg from "./SliderImg"
import SliderItm from "./SliderItm";

function Prva({ data }) {
  console.log(data.podaci)
  let SliderItems = [];
  if (data.podaci.slider[0]) {
    data.podaci.slider.forEach((element, index) => {
      SliderItems.push(
        <SliderItm
          key={"slideritm" + index}
          main={element.main}
          title={element.title}
          imgSrc={element.imgSrc} />
      )
    });
  }
  return (
    <div className="">
      <SliderImg
        items={SliderItems}

        desktop={{
          slidesToShow: 3,
          slidesToScroll: 3,
        }}

        mobile={{
          slidesToShow: 1,
          slidesToScroll: 1,
        }} />
    </div>
  );
}

export default Prva;
