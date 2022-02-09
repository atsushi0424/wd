import styled from 'styled-components'

const Board = () => {
  return (
    <>
    {/* <div style={{
      display : "grid",
      width : "275px",
      height : "325px",
      margin : "0 auto",
      gridTemplateRows : "repeat(6, 1fr)",
      gridGap : "5px",
      boxSizing : "border-box",
    }}>
      <div style={{display : "block"}}>
        <div style={{
          display : "grid",
          gridTemplateColumns : "repeat(5, 1fr)",
          gridGap : "5px",
        }}>
          <One>W</One>
          <One>W</One>
          <One>W</One>
          <One>W</One>
          <One>W</One>
        </div>
        <div style={{
          display : "grid",
          gridTemplateColumns : "repeat(5, 1fr)",
          gridGap : "5px",
        }}>
          <One>W</One>
          <One>W</One>
          <One>W</One>
          <One>W</One>
          <One>W</One>
        </div>
        <div style={{
          display : "grid",
          gridTemplateColumns : "repeat(5, 1fr)",
          gridGap : "5px",
        }}>
          <One>W</One>
          <One>W</One>
          <One>W</One>
          <One>W</One>
          <One>W</One>
        </div>
        <div style={{
          display : "grid",
          gridTemplateColumns : "repeat(5, 1fr)",
          gridGap : "5px",
        }}>
          <One>W</One>
          <One>W</One>
          <One>W</One>
          <One>W</One>
          <One>W</One>
        </div>
        <div style={{
          display : "grid",
          gridTemplateColumns : "repeat(5, 1fr)",
          gridGap : "5px",
        }}>
          <One>W</One>
          <One>W</One>
          <One>W</One>
          <One>W</One>
          <One>W</One>
        </div>
        <div style={{
          display : "grid",
          gridTemplateColumns : "repeat(5, 1fr)",
          gridGap : "5px",
        }}>
          <One>W</One>
          <One>W</One>
          <One>W</One>
          <One>W</One>
          <One>W</One>
        </div>
      </div>
    </div> */}

    <div style={{
      marginTop: "100px",
      width: "310px",
      height: "310px",
      margin: "0 auto"
    }}>
      <LettersRow>
        <LetterTile>A</LetterTile>
        <LetterTile>B</LetterTile>
        <LetterTile>C</LetterTile>
        <LetterTile>D</LetterTile>
        <LetterTile>E</LetterTile>
        <LetterTile>F</LetterTile>
      </LettersRow>
      <LettersRow>
        <LetterTile>A</LetterTile>
        <LetterTile>B</LetterTile>
        <LetterTile>C</LetterTile>
        <LetterTile>D</LetterTile>
        <LetterTile>E</LetterTile>
        <LetterTile>F</LetterTile>
      </LettersRow>
      <LettersRow>
        <LetterTile>A</LetterTile>
        <LetterTile>B</LetterTile>
        <LetterTile>C</LetterTile>
        <LetterTile>D</LetterTile>
        <LetterTile>E</LetterTile>
        <LetterTile>F</LetterTile>
      </LettersRow>
      <LettersRow>
        <LetterTile>A</LetterTile>
        <LetterTile>B</LetterTile>
        <LetterTile>C</LetterTile>
        <LetterTile>D</LetterTile>
        <LetterTile>E</LetterTile>
        <LetterTile>F</LetterTile>
      </LettersRow>
      <LettersRow>
        <LetterTile>A</LetterTile>
        <LetterTile>B</LetterTile>
        <LetterTile>C</LetterTile>
        <LetterTile>D</LetterTile>
        <LetterTile>E</LetterTile>
        <LetterTile>F</LetterTile>
      </LettersRow>
      <LettersRow>
        <LetterTile>A</LetterTile>
        <LetterTile>B</LetterTile>
        <LetterTile>C</LetterTile>
        <LetterTile>D</LetterTile>
        <LetterTile>E</LetterTile>
        <LetterTile>F</LetterTile>
      </LettersRow>
    </div>
    
    </>
  );
}

const One = styled.div`
  display: inline-block;
  border: 2px solid;
  width: 100%;
`

const LettersRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`

const LetterTile = styled.div`
  width: 47px;
  height: 47px;
  border: 2px solid #808080;
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
`

export default Board;
