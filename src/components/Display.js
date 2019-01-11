import * as React from "react";
import * as PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {withStyles} from "@material-ui/core"

const styles = theme => ({
    total: {
        'min-height': '2rem',
    },
    cur: {
        'min-height': '3rem',
        'font-size': '2rem'
    }
});

class Display extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <div>
                <div className={classes.total} align="right">{this.props.total}</div>
                <div className={classes.cur} align="right">
                    {this.props.cur !== '' ? this.props.cur : this.props.preRes}
                </div>
            </div>
        );
    }
}

Display.propTypes = {
    total: PropTypes.string,
    cur: PropTypes.string.isRequired,
    preRes: PropTypes.string,
};

const mapStateToProps = (state) => ({
    total: state.calculator.equation.join(''),
    cur: state.calculator.cur,
    preRes: state.calculator.preRes.toString()
});
const VisibleDisplay = connect(mapStateToProps, null)(withStyles(styles)(Display));
export default VisibleDisplay;