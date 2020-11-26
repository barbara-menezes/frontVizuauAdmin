import { connect } from 'react-redux';
import Login from './Login';
import * as authOperations from '../controller/authOperations';

const mapDispatchToProps = {
  login: authOperations.login
};

export default connect(() => ({}), mapDispatchToProps)(Login);
