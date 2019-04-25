import constants from "./constants";

export default {
  changeMarkerData(NewMarkerData) {
    return {
      type: constants.ACTION_CHANGE_MARKER_DATA,
      payload: NewMarkerData
    };
  },
  changeTypeMenu(NewTypeMenu) {
    return {
      type: constants.ACTION_CHANGE_TYPE_MENU,
      payload: NewTypeMenu
    };
  },

  //
  getInitialState() {
    return {
      type: constants.ACTION_GET_INITIAL_STATE
    };
  },

  
};
