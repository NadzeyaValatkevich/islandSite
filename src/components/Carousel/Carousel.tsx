import React, { useRef } from "react";
import Slider, { Settings } from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface IProps {
  children: React.ReactNode;
  settings: Settings;
  slider?: any;
}

export const Carousel = (props: IProps) => {

  return (
    <Slider {...props.settings} ref={props.slider}>
      {props.children}
    </Slider>
  );
};
