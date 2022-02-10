import './App.css';
import styled from 'styled-components';
import Board from './borad';
import Keyboard from './keyboard';
import React, { useState, useEffect } from 'react';
import Message from './message';
import wordList from './words';

const App = () => {
  const [ANSWERLETTER, setANSWERLETTER] = useState("ANSWER");
  useEffect(() => {
    setANSWERLETTER(wordList[Math.floor(Math.random() * (wordList.length - 1))].toUpperCase());
  }, []);
  // console.log(ANSWERLETTER);
  const toCountDict = arr => {
    const d = {};
    for(let key of arr){
      d[key] = arr.filter(x => x === key).length;
    }
    return d;
  };
  const ANSWERLETTERDICT = toCountDict(ANSWERLETTER.split(""));
  const initialAllLettersState = [];
  for(let r = 0; r < 6; r++){
    initialAllLettersState.push({
      letters: [],
    });
    for(let c = 0; c < 6; c++){
      initialAllLettersState[r].letters.push({
        status: "white",
        letter: "",
      });
    };
  };
  const [allletters, setAllletters] = useState(initialAllLettersState);
  const [rowCursor, setRowCursor] = useState(0);
  const [columnCursor, setColumnCursor] = useState(0);
  const [message, setMessage] = useState("");
  const [isClear, setIsClear] = useState(false);
  const initialAllKeyboardState = {
    "Q": "", "W": "", "E": "", "R": "", "T": "", "Y": "", "U": "", "I": "", "O": "", "P": "",
    "A": "", "S": "", "D": "", "F": "", "G": "", "H": "", "J": "", "K": "", "L": "",
    "Z": "", "X": "", "C": "", "V": "", "B": "", "N": "", "M": ""
  };
  const [keyboardState, setKeyboardState] = useState(initialAllKeyboardState);
  const addLetter = (letter) => {
    if(columnCursor < 6 && !isClear){
      setAllletters((prevState) => {
        const copyOfAllLetter = prevState.slice();
        copyOfAllLetter[rowCursor].letters[columnCursor].letter = letter;
        return copyOfAllLetter;
      });
      setColumnCursor(columnCursor + 1);
    };
  };
  const deleteLetter = () => {
    if(columnCursor > 0){
      setAllletters((prevState) => {
        const copyOfAllLetter = prevState.slice();
        copyOfAllLetter[rowCursor].letters[columnCursor - 1].letter = "";
        return copyOfAllLetter;
      });
      setColumnCursor(columnCursor - 1);
    };
  };
  const checkAnswer = () => {
    let res = true;
    const colors = Array(6).fill("gray");
    const _ANSWERLETTERDICT = {...ANSWERLETTERDICT};
    for(let c = 0; c < 6; c++){
      if(allletters[rowCursor].letters[c].letter === ANSWERLETTER[c]){
        colors[c] = "green";
        _ANSWERLETTERDICT[allletters[rowCursor].letters[c].letter] -= 1;
      }else{
        res = false;
      };
    };
    for(let c = 0; c < 6; c++){
      if(colors[c] === "gray"){
        if(_ANSWERLETTERDICT[allletters[rowCursor].letters[c].letter] > 0){
          colors[c] = "yellow";
        };
      };
    };
    setKeyboardState((prevState) => {
      const copyOfKeyboardState = {...prevState};
      for(let c = 0; c < 6; c++){
        if(copyOfKeyboardState[allletters[rowCursor].letters[c].letter] !== "green"){
          copyOfKeyboardState[allletters[rowCursor].letters[c].letter] = colors[c];
        }
      }
      return copyOfKeyboardState;
    });
    setAllletters((prevState) => {
      const copyOfAllLetter = prevState.slice();
      colors.forEach((e, c) => {
        copyOfAllLetter[rowCursor].letters[c].status = e;
      });
      return copyOfAllLetter;
    });
    return res
  };
  const answer = () => {
    if(columnCursor === 6){
      if(checkAnswer()){
        setMessage("Clear!");
        setIsClear(true);
      };
      setColumnCursor(0);
      if(rowCursor < 5){
        setRowCursor(rowCursor + 1);
      };
    };
  };
  return (
    <>
      <Header>
        <span>W**D**</span>
      </Header>
      <Body>
        <ContentWrapper>
          <Content>
            <Board allletters={allletters}/>
            <Keyboard 
              answer={answer} 
              addLetter={addLetter}
              deleteLetter={deleteLetter}
              keyboardState={keyboardState}
            />
            <Message message={message}/>
          </Content>
        </ContentWrapper>
      </Body>
    </>
  );
}

const Body = styled.header`
  font-family: Nunito, sans-serif;
`;

const Header = styled.header`
  text-align: center;
  border-bottom: 2px solid #dcdcdc;
  font-size: 3rem;
  margin-bottom: 10px;
  font-family: Nunito, sans-serif;
`;

const ContentWrapper = styled.div`
  text-align: center;
`;

const Content = styled.div`
  width : 100%;
  max-width : 500px;
  margin: 0 auto;
`;

export default App;