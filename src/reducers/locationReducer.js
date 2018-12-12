import {UPDATE_LOCATION} from "../action_types";

const initialState = {
  location: ''
};
function exampleDataReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_LOCATION: {
      return {
        ...state,
        location: action.payload
      }
    }
    default: {
      return state;
    }
  }
}
export default exampleDataReducer;