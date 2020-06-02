import React, { useEffect, useState } from 'react';
import { getRandomNumber } from '../helpers/helper';
import { Span } from './styles/StyledElement';

// class Element extends React.Component{

//     const [randomDuration, setRandomDuration] = useState(getRandomNumber(duration - 5, duration));
//   useEffect(() => {
//     setRandomDuration(getRandomNumber(duration - 10, duration));
//   }, [duration, warrning]);

//     render(){
// const {duration, index, letter, active, warrning }=this.props
//         return(
//             <Span warrning={warrning} duration={duration && randomDuration} index={index} active={active}>
//             {letter}
//           </Span>
//         )
//     }
// } = ({ }) => {

//   return (

//   );
// };
const Element = ({ duration, index, letter, active, warrning }) => {
  const [randomDuration, setRandomDuration] = useState(getRandomNumber(duration - 5, duration));
  useEffect(() => {
    setRandomDuration(getRandomNumber(duration - 10, duration));
  }, [duration, warrning]);

  return (
    <Span
      ref={(el) => {
        if (!el) return;
        if (el.getBoundingClientRect().top >= window.innerHeight) {
          alert('You are done');
        }
        console.log(letter, el.getBoundingClientRect().top);
        // setTimeout(() => {
        //   // usually prints a value that is larger than the first console.log
        //   console.log('later', el.getBoundingClientRect().top);
        // });
        // setTimeout(() => {
        //   console.log('way later', el.getBoundingClientRect().width);
        // }, 1000);
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
