import styled, { keyframes } from 'styled-components';

const Message = props => {
  return(
    <MessageContainer className={props.message ? "show" : ""}>
        <span>{props.message}</span>
    </MessageContainer>
  );
};

const FadeInOut = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
`;

const MessageContainer = styled.div`
  position: absolute;
  margin: 0 auto;
  box-sizing: content-box;
  text-align: center;
  width: 100%;
  max-width: 500px;
  top: 120px;
  span {
    opacity: 0;
    font-size: 1.5rem;
    background-color: #d7dadc;
    border-radius: 5px;
    color: #272729;
    font-weight: bold;
    padding: 20px 15px;
    transition: 0.5s;
  }
  &.show {
    span{
      animation-name: ${FadeInOut};
      animation-timing-function: cubic-bezier(.1,.27,.23,1);
      animation-duration: 5s;
    }
  }
`

export default Message;
