import { connect } from 'react-redux';
import EditarCupom from './EditarCupom';
import * as cupomOperations from '../controller/cuponsOperations';

const mapStateToProps = ({ cupom }) => ({
  cupom: cupom.cupomEditar
});

const mapDispatchToProps = {
  obterCupom: cupomOperations.obterCupom,
  editarCupom: cupomOperations.editarCupom
};

export default connect(mapStateToProps, mapDispatchToProps)(EditarCupom);
