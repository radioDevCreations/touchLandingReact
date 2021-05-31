import { AnyAction } from "redux";
import {
  SET_HAMBURGER_STATE,
  SET_NAVBAR_BUTTON
} from "../actions/navbarActions";

export interface AppState {
  hamburgerState: boolean;
  navbarButton: boolean;
}

const initialState = {
  hamburgerState: false,
  navbarButton: true
};

export const navbarReducer = (
  state: AppState = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case SET_HAMBURGER_STATE:
      return { ...state, hamburgerState: action.payload };
      case SET_NAVBAR_BUTTON:
        return { ...state, navbarButton: action.payload };
    default:
      return state;
  }
};
