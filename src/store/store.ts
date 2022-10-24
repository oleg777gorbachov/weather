import { SET_CITY } from "./types";
import { createStore } from "redux";

export type InitialStateType = {
  city: string;
};

const InitialState: InitialStateType = {
  city: "Malyn",
};

type ActionType = {
  type: string;
  payload: object;
};

const reduxReducer = (state = InitialState, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case SET_CITY:
      return { ...state, city: payload };
    default:
      return state;
  }
};

export default createStore(reduxReducer);
