import { connect } from 'react-redux';

import Notification from '../components/Notification';
import { clearNotification } from '../actions/notificationActions';

const mapStateToProps = state => ({
  messages: state.notifications.messages
})

const mapDispatchToProps = dispatch => ({
  clearNotification: () => dispatch(clearNotification())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Notification)
