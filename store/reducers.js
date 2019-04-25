import constants from "./constants/index.js";
import { initialState } from "./initialState.js";

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.ACTION_CHANGE_MARKER_DATA:
      return { ...state, markerData: action.payload };

    case constants.ACTION_CHANGE_TYPE_MENU:
      return { ...state, typeMenu: action.payload };
  
    //
    case constants.ACTION_GET_INITIAL_STATE:
      return initialState;
  }
  return state;
};
