import { connect } from "react-redux";
import Loading from "./Loading";

const mapStateToProps = ({ loading }) => ({
  loading,
});

export default connect(mapStateToProps)(Loading);
