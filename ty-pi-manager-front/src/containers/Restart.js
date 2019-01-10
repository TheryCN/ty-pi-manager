import { connect } from 'react-redux';
import axios from 'axios';

import ServerActionForm from '../components/ServerActionForm';

const restartCall = (dispatch) => {
  axios.get('/restart');
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
