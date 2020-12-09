import React, { useEffect, useState } from 'react';

import Parallax from 'parallax-js';

import juice from '../../assets/img/juice.png';
import juiceWeb from '../../assets/webp/juice.webp';
import leafOne from '../../assets/img/leaf01.png';
import leafOneWeb from '../../assets/webp/leaf01.webp';
import leafTwo from '../../assets/img/leaf02.png';
import leafTwoWeb from '../../assets/webp/leaf02.webp';
import leafThree from '../../assets/img/leaf03.png';
import leafThreeWeb from '../../assets/webp/leaf03.webp';
import leafFour from '../../assets/img/leaf04.png';
import leafFourWeb from '../../assets/webp/leaf04.webp';
import leafFive from '../../assets/img/leaf05.png';
import leafFiveWeb from '../../assets/webp/leaf05.webp';

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
        <picture>
          <source srcSet={juiceWeb} type="image/webp" />
          <source srcSet={juice} type="image/png" />
          <img src={juice} alt="Juice" />
        </picture>
      </div>

      <div className="leaves">
        <ul id="scene">
          <li className="layer" data-depth="-.1">
            <picture>
              <source srcSet={leafOneWeb} type="image/webp" />
              <source srcSet={leafOne} type="image/png" />
              <img src={leafOne} alt="Juice" />
            </picture>
          </li>
          <li className="layer" data-depth="-.3">
            <picture>
              <source srcSet={leafTwoWeb} type="image/webp" />
              <source srcSet={leafTwo} type="image/png" />
              <img src={leafTwo} alt="Juice" />
            </picture>
          </li>
          <li className="layer" data-depth="-1.5">
            <picture>
              <source srcSet={leafThreeWeb} type="image/webp" />
              <source srcSet={leafThree} type="image/png" />
              <img src={leafThree} alt="Juice" />
            </picture>
          </li>
          <li className="layer" data-depth=".1">
            <picture>
              <source srcSet={leafFourWeb} type="image/webp" />
              <source srcSet={leafFour} type="image/png" />
              <img src={leafFour} alt="Juice" />
            </picture>
          </li>
          <li className="layer" data-depth=".3">
            <picture>
              <source srcSet={leafFiveWeb} type="image/webp" />
              <source srcSet={leafFive} type="image/png" />
              <img src={leafFive} alt="Juice" />
            </picture>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Juice;
