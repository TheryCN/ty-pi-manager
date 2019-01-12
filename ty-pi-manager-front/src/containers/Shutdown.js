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
    console.log(error);
    dispatch(notify(error));
  });
}

const aliveCheckCallUntilStop = (dispatch) => {
  axios.get('/status').then(response => {
    dispatch(aliveCheck(true));
    setTimeout(function () {
        aliveCheckCallUntilStop(dispatch);
    }, 5000);
  }).catch(function (error) {
    dispatch(aliveCheck(false));
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
