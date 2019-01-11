import {connect} from "react-redux";
import * as React from "react";
import VisibleDisplay from "./Display";
import Keypad from "./Keypad";
import {VisibleHistory} from "./History";
import {VisibleControlPanel} from "./ControlPanel";
import * as PropTypes from "prop-types";
import {withStyles} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
    paper: {
        maxWidth: '500px',
        minWidth: '375px'
    },
    root: {
        flexGrow: 1
    }
});

class Calculator extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <Grid container className={classes.root} justify='center' alignItems='center'>
                <Grid item>
                    <Paper className={classes.paper}>
                        <VisibleDisplay height="40px"/>
                        <VisibleControlPanel/>
                        {this.props.toggleHistory ? <VisibleHistory/> : <Keypad/>}
                    </Paper>
                </Grid>
            </Grid>
        );
    }
}

Calculator.propTypes = {
    toggleHistory: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
    toggleHistory: state.calculator.toggleHistory
});

export const VisibleCalculator = connect(mapStateToProps, null)(withStyles(styles)(Calculator));