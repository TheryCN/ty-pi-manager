import { ALIVE_CHECK } from '../actions/types';

const servers = (state = { isAlive: true }, action) => {
  switch (action.type) {
    case ALIVE_CHECK:
      return Object.assign({}, state, {isAlive: action.isAlive});
    default:
      return state;
  }
}

export default servers;
