import { connect } from 'react-redux';
import axios from 'axios';

import { notify } from '../actions/notificationActions';
import ServerActionForm from '../components/ServerActionForm';

const shutdownCall = (dispatch) => {
  axios.get('/shutdown').then(response => {
    dispatch(notify("Shutdown..."));
  }).catch(function (error) {
    console.log(error);
    dispatch(notify(error));
  });
}

const mapStateToProps = state => ({
  isAlive: state.servers.isAlive,
  name: 'Shutdown'
})

const mapDispatchToProps = dispatch => ({
  serverActionHandler: () => shutdownCall(dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ServerActionForm);
