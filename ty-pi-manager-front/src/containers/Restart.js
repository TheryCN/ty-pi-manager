import { connect } from 'react-redux';
import axios from 'axios';

import { notify } from '../actions/notificationActions';
import { aliveCheck } from '../actions/serverActions';
import ServerActionForm from '../components/ServerActionForm';

const restartCall = (dispatch) => {
  axios.get('/restart').then(response => {
    dispatch(notify("Restart..."));
    aliveCheckCallUntilRestart(dispatch);
  }).catch(function (error) {
    dispatch(notify(error));
  });
}

const aliveCheckCallUntilRestart = (dispatch) => {
  setTimeout(function () {
    axios.get('/status').then(response => {
      dispatch(notify("Restart done"));
      dispatch(aliveCheck(true));
    }).catch(function (error) {
      dispatch(aliveCheck(false));
      dispatch(notify("All Systems Green"));
          aliveCheckCallUntilRestart(dispatch);
    });
  }, 5000);
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
