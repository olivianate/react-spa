import {
  FETCH_REQUIREMENT,
  FETCH_REQUIREMENT_FAILURE,
  FETCH_REQUIREMENT_SUCCESS,
  DELETE_REQUIREMENT,
  DELETE_REQUIREMENT_FAILURE,
  DELETE_REQUIREMENT_SUCCESS,
  OPEN_MODAL,
  OPEN_EDIT_MODAL,
  CLOSE_MODAL,
} from "./action";

export default function reqReducer(
  state = {
    reqData: {},
    item: {},
    isFetching: false,
    detailModalVisible: false,
    editModalVisible: false,
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
      case DELETE_REQUIREMENT:
      return {
        ...state,
        isFetching: true
      };
      case DELETE_REQUIREMENT_SUCCESS:
      return {
        ...state,
        isFetching: false
      };
      case DELETE_REQUIREMENT_FAILURE:
      return {
        ...state,
        isFetching: false
      };
      case OPEN_MODAL:
      return {
        ...state,
        ...action.payload,
      };
      case OPEN_EDIT_MODAL:
      return {
        ...state,
        ...action.payload,
      };
      case CLOSE_MODAL:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state;
  }
}
