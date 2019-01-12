import { connect } from 'react-redux';

import { aliveCheck } from '../actions/serverActions';
import AliveBand from '../components/AliveBand';

const mapStateToProps = state => ({
  isAlive: state.servers.isAlive
})

const mapDispatchToProps = dispatch => ({
  initHandler: () => dispatch(aliveCheck(true))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AliveBand);
