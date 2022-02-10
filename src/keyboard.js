import styled from 'styled-components';

const Keyboard = props => {
  const keyboardLetters = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M"]
  ];
  return (
    <div style={{
      height: "200px",
      bottom: "0",
      margin: "10px 8px",
      userSelect: "none",
    }}>
      <KeyboardRow>
        {keyboardLetters[0].map((letter) => (
          <LetterKey 
            onClick={() => props.addLetter(letter)}
            className={props.keyboardState[letter]}
          >
            {letter}
          </LetterKey>
        ))}
      </KeyboardRow>
      <KeyboardRow>
        <div style={{flex : `0.5`}}/>
        {keyboardLetters[1].map((letter) => (
          <LetterKey 
            onClick={() => props.addLetter(letter)}
            className={props.keyboardState[letter]}
          >
            {letter}
          </LetterKey>
        ))}
        <div style={{flex : `0.5`}}/>
      </KeyboardRow>
      <KeyboardRow>
        <Enterkey onClick={() => props.answer()}>
          Enter
        </Enterkey>
        {keyboardLetters[2].map((letter) => (
          <LetterKey 
            onClick={() => props.addLetter(letter)}
            className={props.keyboardState[letter]}
          >
            {letter}
          </LetterKey>
        ))}
        <Deletekey onClick={() => props.deleteLetter()}>
          Del
        </Deletekey>
      </KeyboardRow>
    </div>
  );
}

const KeyboardRow = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto 8px;
  touch-action: manipulation;
`

const LetterKey = styled.div`
  font-size: .8rem;
  font-family: inherit;
  font-weight: bold;
  border: 0;
  padding: 0;
  margin: 0 6px 0 0;
  height: 58px;
  border-radius: 4px;
  cursor: pointer;
  user-select: none;
  background-color: #dcdcdc;
  color: $color-tone-1;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  -webkit-tap-highlight-color: rgba(0,0,0,0.3);
  transition: .2s;
  &.green {
    color: #ffffff;
    background-color: #538d4e;
  }
  &.gray {
    color: #ffffff;
    background-color: #808080;
  }
  &.yellow {
    color: #ffffff;
    background-color: #b59f3b;
  }
`

const Enterkey = styled(LetterKey)`
  font-size: 12px;
  flex: 1.5;
`

const Deletekey = styled(LetterKey)`
  font-size: 12px;
  flex: 1.5;
`

export default Keyboard;
