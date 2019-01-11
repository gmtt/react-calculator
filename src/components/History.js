import * as React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import {connect} from "react-redux";
import * as PropTypes from "prop-types";

class History extends React.Component {
    render() {
        let id = 0;
        return (
            <List component="nav">
                {this.props.history.map((equation =>
                        <ListItem button key={id++}>
                            <ListItemText primary={equation.join('')}/>
                        </ListItem>
                ))}
            </List>
        );
    }
}

History.propTypes = {
    history: PropTypes.array
};

const mapStateToProps = (state) => ({
    history: state.calculator.history
});

export const VisibleHistory = connect(mapStateToProps, null)(History);