import React, { useEffect, useState, useRef } from 'react';
import { randomWord, getRandomNumber } from '../helpers/helper';
import styled from 'styled-components';
import Button from '../components/StartBtn';
import Word from '../components/Word';
import Element from '../components/Element';
import InfoBar from '../components/Info';

const word = randomWord();
const Game = () => {
  const [state, setState] = useState({
    word: ['l', 'a', 'u', 'g', 'h', 't', 'e', 'r'],
    current: '',
    active: '',
    lvl: -1,
    sec: 40,
    start: false,
    currentKey: '',
  });
  const myRef = useRef();
  useEffect(() => {
    console.log(state.word);
    setState({ ...state, current: '', active: state.word[0] });
    // myRef.current.focus();
  }, []);
  useEffect(() => {
    if (state.word.length === 0) {
      setState({ ...state, current: '', word: randomWord().split('') });
    }
  }, [state]);

  const onChange = (e) => {
    setState({ ...state, current: e.target.value });
    if (e.target.value === state.word[0]) {
      const newArr = [...state.word];
      newArr.splice(0, 1);
      setState({ ...state, current: '', word: newArr });
    } else {
      setState({ ...state, current: '' });
    }
  };
  useEffect(() => {
    window.addEventListener('click', (e) => {
      myRef.current.focus();
    });
  }, []);

  const onStart = () => {
    setState({ ...state, start: true, lvl: 0, word: randomWord().split('') });
    myRef.current.focus();
  };

  return (
    <React.Fragment>
      <InfoBar />
      <Wrapper>
        {/* <Word> */}
        {!state.start && <Button onClick={onStart}>Start</Button>}
        {state.start &&
          state.word.map((letter, index) => {
            if (index === 0) {
              return (
                <Element duration={state.sec} index={index} letter={letter} active={true}>
                  {letter}
                </Element>
              );
            } else {
              return (
                <Element duration={state.sec} index={index} letter={letter} active={false}>
                  {letter}
                </Element>
              );
            }
          })}
        <input style={{ opacity: 0 }} value={state.current} type='text' ref={myRef} onChange={onChange} />
        {/* </Word> */}
      </Wrapper>
    </React.Fragment>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  font-size: 4rem;
  height: 100vh;
  width: 100%;
  position: relative;
  z-index: 1;
  background-color: rgba(255, 255, 255, 0.8);
`;
export const Span = styled.span`
  height: 60px;
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  font-size: 2rem;
  color: #eee;
  border-radius: 50%;
  margin-left: 3rem;
  animation-name: ${(props) => (props.duration ? 'animationTopFrames' : '')};
  animation-duration: ${(props) => props.duration}s;
  animation-fill-mode: forwards;
  animation-delay: 1s;
  background-color: rgb(49, 145, 231);
  box-shadow: inset -25px -15px 40px rgba(0, 0, 0, 0.3);
  background-image: linear-gradient(-45deg, rgba(255, 255, 220, 0.3) 0%, transparent 100%);

  @keyframes animationTopFrames {
    0% {
      transform: translateY(-100%) translateX(0);
    }
    100% {
      transform: translateY(110vh) translateX(0);
    }
  }
`;

export default Game;
