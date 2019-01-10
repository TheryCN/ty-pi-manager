import { connect } from 'react-redux';
import axios from 'axios';

import AliveBand from '../components/AliveBand';
import { aliveCheck } from '../actions/serverActions';

const aliveCheckCall = (dispatch) => {
  axios.get('/').then(response => {
    dispatch(aliveCheck(true));
  }).catch(function (error) {
    console.log(error);
    dispatch(aliveCheck(false));
  });
}

const mapStateToProps = state => ({
  isAlive: state.servers.isAlive
})

const mapDispatchToProps = dispatch => ({
  initHandler: () => aliveCheckCall(dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AliveBand);
