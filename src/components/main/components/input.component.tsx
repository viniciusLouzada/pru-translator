import React, { useRef } from "react";
import styled from "styled-components";
import { useAppContext } from "../../../store/store";
import { UPDATE_TEXT } from "../../../store/store";

import LanguageSelect from "./language-select.component";

const InputAreaComponent: React.FC = () => {
  const { state, dispatch } = useAppContext();
  const inputRef = useRef<HTMLTextAreaElement>(null);
  console.log("state", state);

  return (
    <InputWrapper>
      <LanguageSelect inputRef={inputRef} />
      <InputArea
        ref={inputRef}
        onChange={e =>
          dispatch({
            type: UPDATE_TEXT,
            payload: { inputText: e.target.value }
          })
        }
      />
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputArea = styled.textarea`
  width: 600px;
  height: 80px;
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

export default InputAreaComponent;
