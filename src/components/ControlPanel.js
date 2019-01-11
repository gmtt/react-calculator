import Button from "@material-ui/core/Button";
import * as React from "react";
import {toggleHistory} from "./action";
import {connect} from "react-redux";
import * as PropTypes from "prop-types";

class ControlPanel extends React.Component {
    render() {
        return (
            <Button onClick={this.props.toggleHistory} fullWidth={true}>
                Toggle History
            </Button>
        );
    }
}

ControlPanel.propTypes = {
    toggleHistory: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
    toggleHistory: () => dispatch(toggleHistory)
});

export const VisibleControlPanel = connect(null, mapDispatchToProps)(ControlPanel);