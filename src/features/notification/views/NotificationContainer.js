import { connect } from "react-redux";
import Notification from "./Notification";
import * as notificationActions from "../redux/notificationActions";

const mapStateToProps = ({ notification }) => ({
  notification,
});

const mapDispatchToProps = {
  ...notificationActions,
};

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
