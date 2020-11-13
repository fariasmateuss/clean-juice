import React, { useEffect, useState } from 'react';

import Parallax from 'parallax-js';

import juice from '../../assets/img/juice.png';
import leafOne from '../../assets/img/leaf01.png';
import leafTwo from '../../assets/img/leaf02.png';
import leafThree from '../../assets/img/leaf03.png';
import leafFour from '../../assets/img/leaf04.png';
import leafFive from '../../assets/img/leaf05.png';

import './styles.css';

const Juice: React.FC = () => {
  const [parallaxScene, setParallaxScene] = useState<Parallax>();

  useEffect(() => {
    const sceneNode = document.getElementById('scene');

    if (sceneNode) {
      setParallaxScene(new Parallax(sceneNode));
    }

    return (): void => {
      parallaxScene?.disable();
    };
  }, []);

  return (
    <>
      <div className="juice">
        <img src={juice} alt="Juice" />
      </div>

      <div className="leaves">
        <ul id="scene">
          <li className="layer" data-depth="-.1">
            <img src={leafOne} alt="" />
          </li>
          <li className="layer" data-depth="-.3">
            <img src={leafTwo} alt="" />
          </li>
          <li className="layer" data-depth="-1.5">
            <img src={leafThree} alt="" />
          </li>
          <li className="layer" data-depth=".1">
            <img src={leafFour} alt="" />
          </li>
          <li className="layer" data-depth=".3">
            <img src={leafFive} alt="" />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Juice;
