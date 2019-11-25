import React, { Component } from 'react';
import { connect } from 'react-redux';


class Header extends Component {

    deleteFunction = () => {
        console.log("delete clicked");
        this.props.dispatch({ type: 'DELETE_EVERYTHING'});
        window.location.reload();
    }
    manualSave = () => {
        console.log("in manual Save")
        
        this.props.dispatch({ type: 'TEXT', payload: this.props.storeEverything.text_save })
        this.props.saveFunction();
    }
    render() {

        return (
            <>
                <header>
                    <button onClick={() => this.manualSave()}> save </button>
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