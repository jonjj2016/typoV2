import React, { useEffect, useState, useRef } from 'react';
import randomWords from 'random-words';
import Element from '../components/Element';
import InfoBar from '../components/Info';
import Landing from './Landing';
import { Line, Wrapper } from '../components/styles/Main';
import Measure from 'react-measure';

let interval;

const Game = () => {
  const [timer, setTimer] = useState(0);
  const [state, setState] = useState({
    word: ['l', 'a', 'u', 'g', 'h', 't', 'e', 'r'],
    current: '',
    active: '',
    finalScore: 0,
    currentScore: 0,
    dimensions: {
      height: -1,
      width: -1,
    },
    lvl: 1,
    score: 0,
    sec: 40,
    start: false,
    currentKey: '',
    timer: 10,
    warrning: false,
    allTypos: 0,
    wrongTypos: 0,
    accuacy: 100,
  });
  const myRef = useRef();
  //   console.log(timer);

  useEffect(() => {
    setState({ ...state, current: '', active: state.word[0] });
    myRef.current.focus();
  }, []);
  useEffect(() => {
    //check if word is typed
    const val = state.word.reduce((acc, red) => acc + red);
    if (!val) {
      setTimer(0);
      let currentScore;
      let lvl;
      if (state.currentScore >= 9) {
        currentScore = 0;
        lvl = state.lvl + 1;
      } else {
        console.log(state);

        currentScore = state.currentScore + 1;
        lvl = state.lvl;
      }
      setState({ ...state, current: '', currentScore, score: state.score + 1, lvl, word: randomWords().split('') });
    }
  }, [state]);

  useEffect(() => {
    window.addEventListener('click', (e) => {
      myRef.current.focus();
    });
  }, []);

  useEffect(() => {
    if (state.start && timer >= 0) {
      interval = setInterval(() => {
        setTimer(timer + 0.1);
      }, 100);
    }
    return () => clearInterval(interval);
  }, [timer, state.start]);
  useEffect(() => {
    console.log(state.dimensions.height);
  }, [state.dimensions.height]);
  const onChange = (e) => {
    const { value } = e.target;
    setState({ ...state, current: e.target.value });
    const accuacy = Math.round(100 - (state.wrongTypos / state.allTypos) * 100) || 100;

    const index = state.word.indexOf(value.toLowerCase());
    const word = [...state.word];
    if (word[index] && !word[index - 1]) {
      word[index] = '';
      setState({ ...state, current: '', accuacy, allTypos: state.allTypos + 1, word, warrning: false });
    } else {
      setState({ ...state, current: '', accuacy, allTypos: state.allTypos + 1, wrongTypos: state.wrongTypos + 1, warrning: true });
    }
  };

  const onStart = () => {
    setTimer(0);
    setState({ ...state, start: true, lvl: 1, currentScore: 0, score: 0, word: randomWords().split(''), warrning: false });
    myRef.current.focus();
  };
  const gameOver = () => {
    console.log('game over', state);
    setState({ ...state, start: false });
  };
  const renderer = () => {
    return (
      <React.Fragment>
        {state.start &&
          state.word.map((letter, index) => {
            if (letter) {
              return (
                <Line key={index}>
                  <Element height={state.dimensions.height} gameOver={gameOver} warrning={!state.word[index - 1] && state.warrning} duration={state.sec} index={index} letter={letter} active={!state.word[index - 1]}>
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
    <Measure
      bounds
      onResize={(contentRect) => {
        setState({ ...state, dimensions: contentRect.bounds });
      }}>
      {({ measureRef }) => (
        <div ref={measureRef}>
          <InfoBar timer={timer} state={state} />
          <Wrapper>
            {!state.start && <Landing onClick={onStart}></Landing>}
            {renderer()}
            <input style={{ opacity: 0 }} value={state.current} type='text' ref={myRef} onChange={onChange} />
          </Wrapper>
          )}
        </div>
      )}
    </Measure>
  );
};

export default Game;
