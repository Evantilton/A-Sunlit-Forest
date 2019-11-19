import React, { Component } from 'react';
import './Gameplay.css'

import { connect } from 'react-redux';

class Gameplay extends Component {
    state = {
        text: "you are a tree in a sunlit forest"
    }

    componentDidMount() {
        this.getEverything();
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
        this.props.dispatch({type: 'GATHER_SUNLIGHT', payload: this.props.storeEverything.click_gather_sunlight})
  }
    saveFunction = () => {
        console.log("savefunction hit: saving the current gamestate");
        console.log("this is what it's sending:", this.props.storeEverything)
        this.props.dispatch({ type: 'SAVE_EVERYTHING', payload: this.props.storeEverything});
    }

    render() {
        // setInterval(() => {
        //     this.gatherSunlight();
        // }, 10000);

        return (
            <>
                <header>
                    <button onClick={this.saveFunction}> save </button>
                    <button>wipe</button>
                    <button>delete</button>
                    <button>options</button>

                </header>

                <div id="gameplay-container">
                    <div className="column" id="left-container">
                        <h1>Resources </h1>
                        <span> Current Sunlight: <div>
                            <p>{this.props.storeEverything.resource_sunlight}</p>
                        </div></span>

                    </div>

                    <div className="column" id="middle-container">
                        <h1>Buttons </h1>
                        <button onClick={this.changeText}> test text</button>
                        <button onClick={this.gatherSunlight}> gather sunlight </button>
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