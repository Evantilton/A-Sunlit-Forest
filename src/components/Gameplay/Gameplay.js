import React, { Component } from 'react';
import './Gameplay.css'

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
        setInterval(() => {
            console.log('This will run every second!');
          }, 1000);

        return (
            <>
                <header>
                    <button>save</button>
                    <button>wipe</button>
                    <button>delete</button>
                    <button>options</button>
                    
                </header>

                <div id="gameplay-container">
                    <div className="column" id="left-container">
                        <h1>Resources </h1>
                        <span> Current Sunlight: <div>
                        {this.props.storeEverything.map((item) => 
                            <span>{item.resource_sunlight}</span>
                        )}
                        </div></span>
                        
                    </div>

                    <div className="column" id="middle-container">
                        <h1>Buttons </h1>
                        <button> test time</button>
                    </div>

                    <div className="column" id="right-container">
                        <div id="time">
                            <h1>time</h1>
                        </div>
                        <h1>Text </h1>
                    </div>
                </div>
            </>
        );
    };
};
const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapReduxStateToProps)(Gameplay);