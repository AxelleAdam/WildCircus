import React from "react";
import { UncontrolledCarousel } from "reactstrap";
import "./Activity.css";

const items = [
  {
    src:
      "https://media.mnn.com/assets/images/2018/02/tiger_circus.jpg.653x0_q80_crop-smart.jpg",
    altText: "Slide 1",
    caption: "Wild animals treated with respect",
    header: "Come and see our beautiful creatures"
  },
  {
    src:
      "https://rcf.fr/sites/default/static.rcf.fr/radios/rcf07/visuels/circus-993642_960_720.jpg",
    altText: "Slide 2",
    caption: "& the funniest tricks",
    header: "The funniest clowns"
  },
  {
    src:
      "https://www.scarlettentertainment.com/sites/default/files/Aerial-Circus-Artist-Alyssa-3.jpg",
    altText: "Slide 3",
    caption: "For emotionnal moments",
    header: "The best performers"
  }
];

const Activity = () => <UncontrolledCarousel items={items} className="items" />;

export default Activity;
