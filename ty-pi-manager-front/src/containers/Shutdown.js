import { connect } from 'react-redux';
import axios from 'axios';

import ServerActionForm from '../components/ServerActionForm';

const shutdownCall = (dispatch) => {
  axios.get('/shutdown');
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
