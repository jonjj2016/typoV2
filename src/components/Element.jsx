import React, { useEffect, useState } from 'react';
import { getRandomNumber } from '../helpers/helper';
import { Span } from './styles/StyledElement';

const Element = ({ duration, index, letter, active, warrning }) => {
  const [randomDuration, setRandomDuration] = useState(getRandomNumber(duration - 5, duration));
  useEffect(() => {
    setRandomDuration(getRandomNumber(duration - 10, duration));
    console.log(warrning, randomDuration);
  }, [duration, warrning]);

  return (
    <Span warrning={warrning} duration={duration && randomDuration} index={index} active={active}>
      {letter}
    </Span>
  );
};

export default Element;
