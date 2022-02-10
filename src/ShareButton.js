import styled from 'styled-components';
import { RWebShare } from "react-web-share";

const ShareButton = props => {
  return(
    <RWebShare
      data={{
        text: "W**D**\n" + props.tiles,
        title: "W**D**",
      }}
    >
      <Button28>Share</Button28>
    </RWebShare>
  );
};

const Button28 = styled.button`
  appearance: none;
  background-color: transparent;
  border: 2px solid #1A1A1A;
  border-radius: 15px;
  box-sizing: border-box;
  color: #3B3B3B;
  cursor: pointer;
  display: inline-block;
  font-family: inherit;
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  min-height: 40px;
  min-width: 0;
  outline: none;
  padding: 16px 24px;
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 140px;
  will-change: transform;
  &:hover {
    color: #fff;
    background-color: #1A1A1A;
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-2px);
  }
  &:active {
    box-shadow: none;
    transform: translateY(0);
  }
  %:disabled {
    pointer-events: none;
  }
`;

export default ShareButton;