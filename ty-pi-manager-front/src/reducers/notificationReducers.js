import { NOTIFY, CLEAR_NOTIFICATION } from '../actions/types';

const notifications = (state = {messages: ['Commencing System Check', 'All Systems Green']}, action) => {
  switch (action.type) {
    case NOTIFY:
      let messages = [];
      messages = messages.concat(state.messages);
      messages.push(action.message);
      return Object.assign({}, state, {messages: messages});
    case CLEAR_NOTIFICATION:
      return Object.assign({}, state, {messages: undefined});
    default:
      return state;
  }
}

export default notifications;
