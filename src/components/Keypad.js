import * as React from "react";
import * as PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import {addDot, addNum, addSymbol, back, clearCur, clearEquation, equal, toggleNeg} from "./action";
import {connect} from "react-redux";
import {withStyles} from "@material-ui/core";

const data = [
    ['CE', 'C', 'BACK', '÷'],
    ['7', '8', '9', 'x'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['±', '0', '.', '=']
];

const styles = theme => ({
    button: {
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
        width: '100%'
    },
    cell: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        width: '25%'
    }
});

class Block extends React.Component {
    render() {
        const {classes} = this.props;
        let symbol = this.props.symbol;
        let callback = () => {
            console.log(symbol)
        };
        switch (symbol) {
            case data[0][0]:    // CE
                callback = this.props.clearEquation;
                break;
            case data[0][1]:    // C
                callback = this.props.clearCur;
                break;
            case data[0][2]:    // BACK
                callback = this.props.back;
                break;
            case data[0][3]:
            case data[1][3]:
            case data[2][3]:
            case data[3][3]:    //÷ x - +
                callback = () => this.props.addSymbol(symbol);
                break;
            case data[4][3]:    // =
                callback = () => this.props.equal();
                break;
            case data[4][0]:    // ±
                callback = this.props.toggleNeg;
                break;
            case data[4][2]:    // .
                callback = this.props.addDot;
                break;
            default:            // 0-9
                callback = () => this.props.addNum(symbol);
        }
        return (
            <Button onClick={callback} className={classes.button} fullWidth={true}>
                {this.props.symbol}
            </Button>
        );
    }
}

Block.propTypes = {
    symbol: PropTypes.string.isRequired,
    addNum: PropTypes.func.isRequired,
    clearCur: PropTypes.func.isRequired,
    clearEquation: PropTypes.func.isRequired,
    addDot: PropTypes.func.isRequired,
    back: PropTypes.func.isRequired,
    toggleNeg: PropTypes.func.isRequired,
    addSymbol: PropTypes.func.isRequired,
    equal: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
    addNum: (s) => dispatch(addNum(s)),
    clearCur: () => dispatch(clearCur),
    clearEquation: () => dispatch(clearEquation),
    addDot: () => dispatch(addDot),
    back: () => dispatch(back),
    toggleNeg: () => dispatch(toggleNeg),
    addSymbol: (s) => dispatch(addSymbol(s)),
    equal: () => dispatch(equal)
});

const VisibleBlock = connect(null, mapDispatchToProps)(withStyles(styles)(Block));


class Keypad extends React.Component {
    render() {
        const {classes} = this.props;
        let rows = [];
        for (let i = 0; i < data.length; ++i) {
            let cols = [];
            for (let j = 0; j < data[i].length; ++j) {
                cols.push(
                    <TableCell key={j} className={classes.cell} padding='none'>
                        <VisibleBlock symbol={data[i][j]}/>
                    </TableCell>)
            }
            rows.push(<TableRow key={i}>{cols}</TableRow>)
        }
        return (
            <Table>
                <TableBody>{rows}</TableBody>
            </Table>
        );
    }
}

Keypad.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Keypad);