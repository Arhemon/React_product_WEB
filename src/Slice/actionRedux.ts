import { createAction, current } from "@reduxjs/toolkit";
const initialState = {
  buttonClicked: false,
  isLoggedIn: false,
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "BUTTON_CLICK":
      return {
        ...state,
        buttonClicked: !state.buttonClicked,
        isLoggedIn: state.buttonClicked ? true : false,
      };
    default:
      return state;
  }
};

export default reducer;
