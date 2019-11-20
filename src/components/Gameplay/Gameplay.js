import React, { Component } from 'react';
import './Gameplay.css';
import Resource from './Resource/Resource';
import Tabs from './Tabs/Tabs';
import Textbox from './Textbox/Textbox';
import Header from './Header/Header';

import { connect } from 'react-redux';

class Gameplay extends Component {

    componentDidMount() {
        this.getEverything();
    }

    getEverything() {
        this.props.dispatch({ type: 'GET_EVERYTHING' });
        console.log("getting everything")
    }

    render() {

        return (
            <>
                <Header />
                <div id="gameplay-container">
                    <Resource />
                    <Tabs />
                    <Textbox />
                </div>
            </>
        );
    };
};
const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapReduxStateToProps)(Gameplay);