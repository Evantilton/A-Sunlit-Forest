import React, { Component } from 'react';
import './Gameplay.css'


import { connect } from 'react-redux';

class Gameplay extends Component {
    state = {
        text: "you are a tree in a sunlit forest"
    }

    componentDidMount() {
        this.getEverything();
        setInterval(() => {
            this.gatherSunlight();
        }, 1000);
        setInterval(() => {
            this.saveFunction();
        }, 100000);
    }

    changeText = (event) => {
        console.log("in ChangeText")
        this.setState({
            text: "woohooo",
        })
        console.log("current state.text", this.state.text)
        this.addText();
        }


    addText = (event) => {
        console.log("in addtext")
        this.props.dispatch({ type: "TEST_TEXT", payload: this.state.text })
    }

    getEverything() {
        this.props.dispatch({ type: 'GET_EVERYTHING' });
        console.log("getting everything")
    }
    gatherSunlight = () => {
        console.log("gathering Sunlight")
        if (this.props.storeEverything.resource_sunlight >= this.props.storeEverything.resource_sunlight_max) {
            this.props.dispatch({type: 'GATHER_SUNLIGHT_MAX', payload: this.props.storeEverything.resource_sunlight_max})
        
        } else
        this.props.dispatch({type: 'GATHER_SUNLIGHT', payload: this.props.storeEverything.click_gather_sunlight})
  }
    buySap = () => {
        console.log ("Buying Sap")
        if (this.props.storeEverything.resource_sunlight >= this.props.storeEverything.resource_sap_price 
            && this.props.storeEverything.resource_sap < this.props.storeEverything.resource_sap_max) {
            this.props.dispatch({type: 'BUY_SAP', payload: this.props.storeEverything.resource_sap_price})
        }
    }
        
    upgradeRoots = () => {
        console.log ("upgrading Roots")
        
    }
    

    saveFunction = () => {
        console.log("savefunction hit: saving the current gamestate");
        console.log("this is what it's sending:", this.props.storeEverything)
        this.props.dispatch({ type: 'SAVE_EVERYTHING', payload: this.props.storeEverything});
    }

    render() {

        return (
            <>
                <header>
                    <button onClick={this.saveFunction}> save </button>
                    <button>delete</button>

                </header>

                <div id="gameplay-container">
                    <div className="column" id="left-container">
                        <h1>Resources </h1>
                        <span> 
                            <p>Current Sunlight: {this.props.storeEverything.resource_sunlight}/{this.props.storeEverything.resource_sunlight_max}</p>
                            <p>Current Sap: {this.props.storeEverything.resource_sap}/{this.props.storeEverything.resource_sap_max} </p>
                            <button onClick={this.buySap}> Convert Sunlight into Sap </button>
                            <p>Current Science: {this.props.storeEverything.resource_science}/{this.props.storeEverything.resource_science_max} </p>
                            <p>Current treefolk: {this.props.storeEverything.resource_treefolk}/{this.props.storeEverything.resource_treefolk} </p>
                        </span>
                    </div>

                    <div className="column" id="middle-container">
                        <h1>Buttons </h1>
                        <button onClick={this.gatherSunlight}> gather sunlight </button>
                        <button onClick={this.upgradeRoots}> Expand Roots </button>
                    
                    </div>

                    <div className="column" id="right-container">
                        <div id="time"></div>
                        <h1>Text </h1>
                        <ul>
                                {this.props.textTest.map((hello) =>
                                <li>{hello}</li>
                                )}
                        </ul>

                       
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