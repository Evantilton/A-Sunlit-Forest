import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {

    deleteFunction = () => {
        console.log("delete clicked");
        this.props.dispatch({ type: 'DELETE_EVERYTHING'});
    }

    render() {

        return (
            <>
                <header>
                    <button onClick={() => this.props.saveFunction}> save </button>
                    <button onClick={() => this.deleteFunction()}>delete</button>
                </header>
            </>
        );
    };
};
const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapReduxStateToProps)(Header);