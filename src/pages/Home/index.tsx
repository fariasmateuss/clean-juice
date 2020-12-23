import React, { useEffect, useState } from 'react';

import Parallax from 'parallax-js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

import juice from '../../assets/img/juice.png';
import leafOne from '../../assets/img/leaf01.png';
import leafTwo from '../../assets/img/leaf02.png';
import leafThree from '../../assets/img/leaf03.png';
import leafFour from '../../assets/img/leaf04.png';
import leafFive from '../../assets/img/leaf05.png';

import juiceOptimized from '../../assets/webp/juice.webp';
import leafOneOptimized from '../../assets/webp/leaf01.webp';
import leafTwoOptimized from '../../assets/webp/leaf02.webp';
import leafThreeOptimized from '../../assets/webp/leaf03.webp';
import leafFourOptimized from '../../assets/webp/leaf04.webp';
import leafFiveOptimized from '../../assets/webp/leaf05.webp';

import Header from '../../components/Header';

import {
  Wrapper,
  Amount,
  TextWithOpacity,
  Title,
  More,
  Desc,
  Arrow,
  Juice,
  Leaves,
} from './styles';

const Home: React.FC = () => {
  const [parallaxScene, setParallaxScene] = useState<Parallax>();
  const [count, setCount] = useState(0);

  useEffect(() => {
    const sceneNode = document.getElementById('scene');

    if (sceneNode) {
      setParallaxScene(new Parallax(sceneNode));
    }

    return (): void => {
      parallaxScene?.disable();
    };
  }, []);

  if (count < 0) {
    setCount(0);
  }

  return (
    <>
      <Header />

      <Wrapper>
        <TextWithOpacity>Select the desired quantity</TextWithOpacity>

        <Amount>
          <span>{count}</span>/juices
        </Amount>

        <Title>Orange</Title>

        <More>
          <a href="foo">Show all the juices</a>
        </More>

        <Desc>
          <p>
            Your <span>healthy</span> life <br />
            starts here with us
          </p>
          <p>
            A family owned company founded with the purpose of giving your
            family access to clean, organic products while you are on the go.
          </p>
        </Desc>
      </Wrapper>

      <Arrow
        type="button"
        aria-label="button"
        arrowPosition="left"
        onClick={() => setCount(count - 1)}
      >
        <FontAwesomeIcon icon={faChevronLeft} size="sm" />
      </Arrow>
      <Arrow
        type="button"
        aria-label="button"
        arrowPosition="right"
        onClick={() => setCount(count + 1)}
      >
        <FontAwesomeIcon icon={faChevronRight} size="sm" />
      </Arrow>

      <Juice>
        <picture>
          <source srcSet={juiceOptimized} type="image/webp" />
          <source srcSet={juice} type="image/png" />
          <img src={juice} alt="Juice" />
        </picture>
      </Juice>

      <Leaves>
        <ul id="scene">
          <li className="layer" data-depth="-.1">
            <picture>
              <source srcSet={leafOneOptimized} type="image/webp" />
              <source srcSet={leafOne} type="image/png" />
              <img src={leafOne} alt="Juice" />
            </picture>
          </li>
          <li className="layer" data-depth="-.3">
            <picture>
              <source srcSet={leafTwoOptimized} type="image/webp" />
              <source srcSet={leafTwo} type="image/png" />
              <img src={leafTwo} alt="Juice" />
            </picture>
          </li>
          <li className="layer" data-depth="-1.5">
            <picture>
              <source srcSet={leafThreeOptimized} type="image/webp" />
              <source srcSet={leafThree} type="image/png" />
              <img src={leafThree} alt="Juice" />
            </picture>
          </li>
          <li className="layer" data-depth=".1">
            <picture>
              <source srcSet={leafFourOptimized} type="image/webp" />
              <source srcSet={leafFour} type="image/png" />
              <img src={leafFour} alt="Juice" />
            </picture>
          </li>
          <li className="layer" data-depth=".3">
            <picture>
              <source srcSet={leafFiveOptimized} type="image/webp" />
              <source srcSet={leafFive} type="image/png" />
              <img src={leafFive} alt="Juice" />
            </picture>
          </li>
        </ul>
      </Leaves>
    </>
  );
};

export default Home;
