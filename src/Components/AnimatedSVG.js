import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import './AnimatedSVG.css';
const AnimatedSvg = () => {
    const mysvg = useRef(null)
    useEffect(() => {
    lottie.loadAnimation({
      container: mysvg.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('./animatedImage.json'),
    })
    }, [])
    return (
      <div className="container animatedsvg" ref={ mysvg }></div>
    );
  }
  export default AnimatedSvg;