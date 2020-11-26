import { connect } from 'react-redux';
import CadastroView from './CadastroView';
import * as authOperations from '../../controller/authOperations';

const mapDispatchToProps = {
  cadastrar: authOperations.cadastrar
};

export default connect(() => ({}), mapDispatchToProps)(CadastroView);
