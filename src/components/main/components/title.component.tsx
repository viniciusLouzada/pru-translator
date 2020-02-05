import React from "react";
import styled from "styled-components";
import pidgeon from "../../../assets/images/pigeon.png";

const TitleComponent: React.FC = () => (
  <TitleWrapper>
    <PigeonIcon src={pidgeon} alt="" className="pidgeon-icon" />
    <h1>Pru Translator</h1>
  </TitleWrapper>
);

const TitleWrapper = styled.div`
  display: flex;
  vertical-align: middle;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  font-family: "Sigmar One", cursive;
`;

const PigeonIcon = styled.img`
  height: 150px;
  width: 150px;
`;

export default TitleComponent;
