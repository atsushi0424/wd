import './App.css';
import styled from 'styled-components';
import Board from './borad';
import Keyboard from './keyboard';

const App = () => {
  return (
    <>
      <header>
        header
      </header>
      <body>
        <ContentWrapper>
          <Content class="content">
            <Board />
            <Keyboard />
          </Content>
        </ContentWrapper>
      </body>
    </>
  );
}

const ContentWrapper = styled.div`
  text-align: center;
`;

const Content = styled.div`
  width : 100%;
  max-width : 500px;
  margin: 0 auto;
`;

export default App;
