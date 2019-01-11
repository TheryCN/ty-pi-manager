import { combineReducers } from 'redux';
import servers from './serverReducers';
import notifications from './notificationReducers';

export default combineReducers({
  servers,
  notifications
});
