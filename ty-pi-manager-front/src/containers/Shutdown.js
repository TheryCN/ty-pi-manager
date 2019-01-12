import { connect } from 'react-redux';
import axios from 'axios';

import { notify } from '../actions/notificationActions';
import { aliveCheck } from '../actions/serverActions';
import ServerActionForm from '../components/ServerActionForm';

const shutdownCall = (dispatch) => {
  axios.get('/shutdown').then(response => {
    dispatch(notify("Shutdown..."));
    aliveCheckCallUntilStop(dispatch);
  }).catch(function (error) {
    dispatch(notify(error));
  });
}

const aliveCheckCallUntilStop = (dispatch) => {
  setTimeout(function () {
    axios.get('/status').then(response => {
      dispatch(aliveCheck(true));
      dispatch(notify("Shutdown in progress"));
          aliveCheckCallUntilStop(dispatch);
    }).catch(function (error) {
      dispatch(notify("All Systems Red"));
      dispatch(aliveCheck(false));
    });
  }, 5000);
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
