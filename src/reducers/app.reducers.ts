/*reducers.ts*/

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export const ThemeInitialState = {
  value: "light",
};

// Theme
export type ThemeType = {
  value: string;
};

export enum ActionTypes {
  UpdateTheme = "SET_THEME",
}

type ThemePayload = {
  [ActionTypes.UpdateTheme]: {
    value: string;
  };
};

export type ThemeActions =
  ActionMap<ThemePayload>[keyof ActionMap<ThemePayload>];

export const themeReducer = (state: ThemeType, action: ThemeActions) => {
  switch (action.type) {
    case ActionTypes.UpdateTheme:
      return {
        value: action.payload.value,
      };
    default:
      return state;
  }
};
