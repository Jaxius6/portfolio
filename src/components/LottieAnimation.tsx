"use client";

import Lottie from "lottie-react";
import animationData from "../../public/images/animation.json";

export default function LottieAnimation() {
  return (
    <Lottie
      animationData={animationData}
      autoplay
      loop
      style={{ width: '100%', height: '100%' }}
    />
  );
}
