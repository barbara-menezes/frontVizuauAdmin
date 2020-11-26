import { connect } from 'react-redux';
import ListagemCupom from './ListagemCupom';
import * as cupomOperations from '../controller/cuponsOperations';

const mapStateToProps = ({ cupom }) => ({
  cupons: cupom.cupons
});

const mapDispatchToProps = {
  listaCupons: cupomOperations.listaCupons,
  removerCupom: cupomOperations.removerCupons,
  liberarCupom: cupomOperations.liberarCupom
};

export default connect(mapStateToProps, mapDispatchToProps)(ListagemCupom);
