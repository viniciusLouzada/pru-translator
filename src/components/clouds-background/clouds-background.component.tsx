import React from "react";
import styled from "styled-components";

import Cloud from "./cloud.component";

const CLOUDS_NUMBER = 8;

const CloudBackground: React.FC = () => {
  const width = document.body.clientWidth;
  const height = document.body.clientHeight;

  return (
    <BackgroundWrapper>
      {Array.from({ length: CLOUDS_NUMBER }, (v, i) => (
        <Cloud key={i} width={width} height={height} />
      ))}
    </BackgroundWrapper>
  );
};

const BackgroundWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #38bff8;
  z-index: 1;
  position: absolute;
`;

export default CloudBackground;
