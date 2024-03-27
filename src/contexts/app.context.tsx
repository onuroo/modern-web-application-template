"use client";
import React, { createContext, useReducer, Dispatch, useContext } from "react";
import {
  themeReducer,
  ThemeActions,
  ThemeInitialState,
  ThemeType,
} from "../reducers/app.reducers";

const AppContext = createContext<{
  state: ThemeType;
  dispatch: Dispatch<ThemeActions>;
}>({
  state: ThemeInitialState,
  dispatch: () => null,
});

type Props = {
  children: React.ReactNode;
};

const AppProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, ThemeInitialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
