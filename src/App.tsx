import React from "react";
import styled from "styled-components";
import { AppContextProvider } from "./store/store";

import CloudBackground from "./components/clouds-background/clouds-background.component";
import Main from "./components/main/main.component";

const App: React.FC = () => {
  return (
    <AppWrapper>
      <CloudBackground />
      <AppContextProvider>
        <Main />
      </AppContextProvider>
    </AppWrapper>
  );
};

const AppWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export default App;
