import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

import './styles.css';

const Context: React.FC = () => {
  const [count, setCount] = useState(0);

  if (count < 0) {
    setCount(0);
  }

  return (
    <>
      <div className="content">
        <div className="tagline">Select the desired quantity</div>

        <div className="pages">
          <span>{count}</span>/juices
        </div>

        <div className="title">Orange</div>

        <div className="more">
          <a href=".">Show all the juices</a>
        </div>

        <div className="desc">
          <p>
            Your <span>healthy</span> life <br />
            starts here with us
          </p>
          <p>
            A family owned company founded with the purpose of giving your
            family access to clean, organic products while you are on the go.
          </p>
        </div>
      </div>

      <div className="arrows">
        <button
          type="button"
          className="prev"
          onClick={() => setCount(count - 1)}
        >
          <FontAwesomeIcon icon={faChevronLeft} size="sm" />
        </button>
        <button
          type="button"
          className="next"
          onClick={() => setCount(count + 1)}
        >
          <FontAwesomeIcon icon={faChevronRight} size="sm" />
        </button>
      </div>
    </>
  );
};

export default Context;
