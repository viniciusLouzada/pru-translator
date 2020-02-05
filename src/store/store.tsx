import React, { useReducer, useContext, Dispatch } from "react";

export const UPDATE_TEXT = "UPDATE_TEXT";
export const CHANGE_LANGUAGE_OPT = "CHANGE_LANGUAGE_OPT";

type UPDATE_TEXT_ACTION = {
  type: "UPDATE_TEXT";
  payload: {
    inputText: string;
  };
};

type CHANGE_LANGUAGE_ACTION = {
  type: "CHANGE_LANGUAGE_OPT";
  payload: {
    translatorOption: string;
  };
};

type Action = UPDATE_TEXT_ACTION | CHANGE_LANGUAGE_ACTION;

type State = {
  inputText: string;
  translatorOption: string;
};

type ContextValue = {
  state: State;
  dispatch: Dispatch<Action>;
};

export const initialState: State = {
  inputText: "",
  translatorOption: "pt-pru"
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case UPDATE_TEXT: {
      const { payload } = action;
      return {
        ...state,
        inputText: payload.inputText
      };
    }
    case CHANGE_LANGUAGE_OPT: {
      const { payload } = action;
      return {
        translatorOption: payload.translatorOption,
        inputText: ""
      };
    }
    default:
      return state;
  }
};

const AppContext = React.createContext({} as ContextValue);

export const AppContextProvider = (props: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export const useAppContext = () => {
  const value = useContext(AppContext);
  return value;
};
