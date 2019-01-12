import { connect } from 'react-redux';

import { aliveCheck } from '../actions/serverActions';
import AliveStatus from '../components/AliveStatus';

const mapStateToProps = state => ({
  isAlive: state.servers.isAlive
})

const mapDispatchToProps = dispatch => ({
  initHandler: () => dispatch(aliveCheck(true))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AliveStatus);
