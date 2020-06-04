import React, { useEffect, useState } from 'react';
import { getRandomNumber } from '../helpers/helper';
import { Span } from './styles/StyledElement';

const Element = ({ height, gameOver, duration, index, letter, active, warrning }) => {
  const speed = getRandomNumber(duration - 10, duration);
  const [randomDuration, setRandomDuration] = useState(speed);
  useEffect(() => {
    setRandomDuration(getRandomNumber(duration - 15, duration));
  }, [duration, warrning]);

  return (
    <Span
      ref={(el) => {
        if (!el) return;
        if (el.getBoundingClientRect().top >= height) {
          gameOver();
        }
      }}
      warrning={warrning}
      duration={duration && randomDuration}
      index={index}
      active={active}>
      {letter}
    </Span>
  );
};

export default Element;
