import React from "react";
import styled from "styled-components";

import Title from "./components/title.component";
import InputArea from "./components/input.component";
import TranslatedText from "./components/translated-text.component";

const MainComponent: React.FC = () => {
  return (
    <MainWrapper>
      <Title />
      <InputArea />
      <TranslatedText />
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 2;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  position: absolute;
`;

export default MainComponent;
