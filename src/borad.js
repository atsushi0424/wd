import styled, { keyframes } from 'styled-components';

const Board = props => {
  return (
    <div style={{
      marginTop: "100px",
      width: "310px",
      height: "310px",
      margin: "0 auto"
    }}>
      {props.allletters.map(e => (
        <LettersRow>
          {e.letters.map(l => (
            <LetterTile className={`${l.status}`}>
              {l.letter}
            </LetterTile>
          ))}
        </LettersRow>
      ))}
    </div>
  );
}

const Rotate = keyframes`
  50% {
    transform: rotateX(90deg);
  }
  100% {
    transform: rotateX(0);
  }
`;

const LettersRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`

const LetterTile = styled.div`
  width: 47px;
  height: 47px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  line-height: 2rem;
  font-weight: bold;
  vertical-align: middle;
  box-sizing: border-box;
  text-transform: uppercase;
  user-select: none;
  &.white {
    border: 2px solid #808080;
    color: #000000;
    background-color: #ffffff;
  }
  &.green {
    color: #ffffff;
    background-color: #538d4e;
    animation-name: ${Rotate};
    animation-timing-function: ease-in-out;
    animation-duration: .5s;
  }
  &.gray {
    color: #ffffff;
    background-color: #808080;
    animation-name: ${Rotate};
    animation-timing-function: ease-in-out;
    animation-duration: .5s;
  }
  &.yellow {
    color: #ffffff;
    background-color: #b59f3b;
  }
`

export default Board;
