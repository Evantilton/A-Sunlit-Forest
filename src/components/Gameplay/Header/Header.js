import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {


    render() {

        return (
            <>
                <header>
                    <button onClick={this.props.saveFunction}> save </button>
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