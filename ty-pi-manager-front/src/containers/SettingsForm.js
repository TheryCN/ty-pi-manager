import { connect } from 'react-redux';
import axios from 'axios';

import { notify } from '../actions/notificationActions';

import SettingsForm from '../components/SettingsForm';

const saveSettingsCall = (dispatch, app, settings) => {
  axios.post('/settings/'+app, settings).then(response => {
    dispatch(notify("Settings saved"));
  }).catch(function (error) {
    console.log(error);
    dispatch(notify(JSON.stringify(error)));
  });
}

const mapStateToProps = state => ({
  isAlive: state.servers.isAlive
})

const mapDispatchToProps = dispatch => ({
  saveSettingsHandler: (app, settings) => saveSettingsCall(dispatch, app, settings)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsForm);
