import React from "react";
import styled from "styled-components";
import { useAppContext } from "../../../store/store";

import {
  translateToPigeon,
  translateToHuman
} from "../../../services/translate-text";

const translateText = (text: string, translatorOption: string): string => {
  if (translatorOption === "pt-pru") {
    return translateToPigeon(text);
  } else {
    return translateToHuman(text);
  }
};

const TranslatedTextComponent: React.FC = () => {
  const { state } = useAppContext();
  const { inputText, translatorOption } = state;
  return (
    <TranslatedTextArea
      readOnly
      value={translateText(inputText, translatorOption)}
    ></TranslatedTextArea>
  );
};

const TranslatedTextArea = styled.textarea`
  width: 600px;
  height: 250px;
  background-color: white;
  margin-top: 40px;
  text-align: left;
  padding: 5px;
  border-radius: 5px;
  font-size: 15px;
  border: none;
  overflow: auto;
  outline: black;
  box-shadow: 2px 2px 2px 0px rgb(31, 31, 31);
  resize: none;

  @media screen and (max-width: 479px) {
    width: 350px;
  }
`;

export default TranslatedTextComponent;
