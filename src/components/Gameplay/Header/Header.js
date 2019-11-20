import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {

    componentDidMount() {
        setInterval(() => {
            this.saveFunction();
        }, 10000);
    }

    saveFunction = () => {
        console.log("savefunction hit: saving the current gamestate");
        this.props.dispatch({ type: 'SAVE_EVERYTHING', payload: this.props.storeEverything});
    }

    render() {

        return (
            <>
                <header>
                    <button onClick={this.saveFunction}> save </button>
                    <button>delete</button>
                </header>
            </>
        );
    };
};
const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapReduxStateToProps)(Header);