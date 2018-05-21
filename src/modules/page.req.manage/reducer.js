import {
  FETCH_REQUIREMENT,
  FETCH_REQUIREMENT_FAILURE,
  FETCH_REQUIREMENT_SUCCESS
} from "./action";

export default function reqReducer(
  state = {
    reqData: {},
    isFetching: false
  },
  action
) {
  switch (action.type) {
    case FETCH_REQUIREMENT:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_REQUIREMENT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        reqData: action.data
      };
    case FETCH_REQUIREMENT_FAILURE:
      return {
        ...state,
        reqData: {},
        isFetching: false
      };
    default:
      return state;
  }
}
