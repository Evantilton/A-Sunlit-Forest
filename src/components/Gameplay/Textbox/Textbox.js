import React, { Component } from 'react';

import { connect } from 'react-redux';

class Textbox extends Component {
    state = {
        text: "you are a tree in a sunlit forest"
    }

    render() {

        return (
            <>
            <div className="column" id="right-container">
                        <div id="time">


                        </div>
                        <p>You are a tree in a sunlit forest.</p>
                        <ul>
                                {this.props.gameText.map((text) => 
                                <li>{text}</li> )}
                        </ul>
                        </div>
            </>
        );
    };
};
const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapReduxStateToProps)(Textbox);