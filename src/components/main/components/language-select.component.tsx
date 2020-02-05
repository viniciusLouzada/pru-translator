import React, { RefObject } from "react";
import styled from "styled-components";
import { useAppContext } from "../../../store/store";
import { CHANGE_LANGUAGE_OPT } from "../../../store/store";

type LanguageSelectComponentProps = {
  inputRef: RefObject<HTMLTextAreaElement>;
};

const LanguageSelectComponent: React.FC<LanguageSelectComponentProps> = ({
  inputRef
}) => {
  const { dispatch } = useAppContext();
  return (
    <TranslatorSelect
      onChange={e => {
        if (inputRef.current) {
          inputRef.current.value = "";
        }
        dispatch({
          type: CHANGE_LANGUAGE_OPT,
          payload: { translatorOption: e.target.value }
        });
      }}
    >
      <option value="pt-pru">Pt -> Pru</option>
      <option value="pru-pt">Pru -> Pt</option>
    </TranslatorSelect>
  );
};

const TranslatorSelect = styled.select`
  font-family: "Sigmar One", cursive;
  width: 10%;
  font-size: 14px;
  margin-bottom: 20px;

  @media screen and (max-width: 479px) {
    width: 35%;
    font-size: 14px;
    background-color: white;
  }
`;

export default LanguageSelectComponent;
