import React, { useEffect, useState, useRef } from 'react';
import randomWords from 'random-words';
import Button from '../components/StartBtn';
import Element from '../components/Element';
import InfoBar from '../components/Info';
import { Line, Wrapper } from '../components/styles/Main';
// import Explosion from 'react-explode/Guyam';

let interval;

const Game = () => {
  const [timer, setTimer] = useState(10);
  const [state, setState] = useState({
    word: ['l', 'a', 'u', 'g', 'h', 't', 'e', 'r'],
    current: '',
    active: '',
    finalScore: 0,
    currentScore: 0,
    lvl: 1,
    score: 0,
    sec: 40,
    start: false,
    currentKey: '',
    timer: 10,
    warrning: false,
    allTypos: 0,
    wrongTypos: 0,
  });
  const myRef = useRef();
  const elementRef = useRef();
  useEffect(() => {
    setState({ ...state, current: '', active: state.word[0] });
    myRef.current.focus();
  }, []);
  useEffect(() => {
    //check if word is typed
    const val = state.word.reduce((acc, red) => acc + red);

    if (!val) {
      if (state.currentScore > 9) {
        setTimer(timer - 1);
        setState({ ...state, current: '', sec: state.sec - 5, currentScore: 0, score: state.score + 1, lvl: state.lvl + 1, word: randomWords().split('') });
      } else {
        setTimer(10);
        setState({ ...state, current: '', currentScore: state.currentScore + 1, score: state.score + 1, word: randomWords().split('') });
      }
    }
  }, [state]);

  useEffect(() => {
    window.addEventListener('click', (e) => {
      myRef.current.focus();
    });
  }, []);

  useEffect(() => {
    if (state.start) {
      interval = setInterval(() => {
        if (timer <= 0) {
          clearInterval(interval);
          setTimer(10);
          setState({ ...state, start: false, currentScore: 0, lvl: 0 });
        } else {
          setTimer(timer - 1);
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timer, state.start]);

  const onChange = (e) => {
    const { value } = e.target;
    setState({ ...state, current: e.target.value });
    const index = state.word.indexOf(value);
    const word = [...state.word];
    if (word[index] && !word[index - 1]) {
      word[index] = '';
      console.log(word);
      setState({ ...state, current: '', allTypos: state.allTypos + 1, word, warrning: false });
    } else {
      setState({ ...state, current: '', sec: state.sec - 1, allTypos: state.allTypos + 1, wrongTypos: state.wrongTypos + 1, warrning: true });
    }
  };

  const onStart = () => {
    setState({ ...state, start: true, lvl: 0, score: 0, word: randomWords().split(''), warrning: false });
    myRef.current.focus();
  };

  const renderer = () => {
    return (
      <React.Fragment>
        {state.start &&
          state.word.map((letter, index) => {
            if (letter) {
              return (
                <Line key={index}>
                  <Element warrning={!state.word[index - 1] && state.warrning} duration={state.sec} index={index} letter={letter} active={!state.word[index - 1]}>
                    {letter}
                  </Element>
                </Line>
              );
            } else {
              return <Line key={index} />;
            }
          })}
      </React.Fragment>
    );
  };

  return (
    <React.Fragment>
      <InfoBar timer={timer} state={state} />
      <Wrapper>
        {!state.start && <Button onClick={onStart}>Start</Button>}
        {renderer()}
        <input style={{ opacity: 0 }} value={state.current} type='text' ref={myRef} onChange={onChange} />
      </Wrapper>
    </React.Fragment>
  );
};

export default Game;
