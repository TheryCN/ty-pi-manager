import { connect } from 'react-redux';
import axios from 'axios';

import { notify } from '../actions/notificationActions';
import ServerActionForm from '../components/ServerActionForm';

const restartCall = (dispatch) => {
  axios.get('/restart').then(response => {
    dispatch(notify("Restart..."));
  }).catch(function (error) {
    console.log(error);
    dispatch(notify(error));
  });
}

const mapStateToProps = state => ({
  isAlive: state.servers.isAlive,
  name: 'Restart'
})

const mapDispatchToProps = dispatch => ({
  serverActionHandler: () => restartCall(dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ServerActionForm);
