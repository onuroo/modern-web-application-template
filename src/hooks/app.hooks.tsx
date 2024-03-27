import { AppContext } from "@/contexts/app.context";
import { ActionTypes, ThemeType } from "@/reducers/app.reducers";
import { useContext } from "react";

export const AppHooks = () => {
  const { state, dispatch } = useContext(AppContext);

  const updateTheme = (theme: ThemeType) => {
    dispatch({
      type: ActionTypes.UpdateTheme,
      payload: {
        value: theme.value,
      },
    });
  };

  return {
    state,
    updateTheme,
  };
};
