
import {TOGGLE_SIDE} from './action'

export default function header(state = {collapsed:false}, action) {
  switch (action.type) {
    case TOGGLE_SIDE:
      return { ...state, collapsed:!state.collapsed};
    
    default:
      return state;
  }
}