import { GET_ERRORS, GET_ALL_DEVELOPER } from "../actions/types";

const initialState = {
    developers: []
  };

  export default function(state = initialState, action) {
    switch (action.type) {
      case GET_ALL_DEVELOPER:
        return {
          ...state,
          developers: action.payload
        };
        
      default:
        return state;
    }
  }