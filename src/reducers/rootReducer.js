import {
  LOCATION_HOME,
  LOCATION_NEWS
} from "../action_types";

const initialState = {
  location: ''
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case LOCATION_HOME: {
      return {
        ...state,
        location: "home"
      }
    }
    case LOCATION_NEWS: {
      return {
        ...state,
        location: "news"
      }
    }
    default: {
      return state;
    }
  }
}
export default rootReducer;