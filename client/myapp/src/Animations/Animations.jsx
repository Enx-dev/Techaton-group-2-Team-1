import React from "react";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { EaselPlugin } from "gsap/EaselPlugin";
import { PixiPlugin } from "gsap/PixiPlugin";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(
  Flip,
  ScrollTrigger,
  ScrollToPlugin,
  EaselPlugin,
  PixiPlugin,
  TextPlugin
);

const Animations = () => {
  React.useEffect(() => {}, []);
  return <div>Animations</div>;
};

export default Animations;
