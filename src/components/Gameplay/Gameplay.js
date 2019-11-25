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
        setInterval(() => {
            this.saveFunction();
        }, 100000);
    }

    getEverything() {
        this.props.dispatch({ type: 'GET_EVERYTHING' });
        console.log("getting everything")
    }

    saveFunction = () => {
        console.log("savefunction hit: saving the current gamestate");
        this.props.dispatch({ type: 'SAVE_EVERYTHING', payload: this.props.storeEverything});
    }
    render() {

        return (
            <>
                <Header saveFunction={this.saveFunction}/>
                <div id="gameplay-container">
                    <Resource/>
                    <Tabs />
                    <Textbox />
                </div>
                {/* added in this one */}
              
        
            </>
        );
    };
};
const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapReduxStateToProps)(Gameplay);