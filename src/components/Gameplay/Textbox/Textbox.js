import React, { Component } from 'react';

import { connect } from 'react-redux';
import Time from './Time/Time';
class Textbox extends Component {


    render() {

        return (
            <>
                <div className="column" id="right-container">
                    <Time />

                    <p>You are a tree in a sunlit forest.</p>
                    <ul>
                        {this.props.gameText.map((text) =>
                            <p>{text}</p>)}
                    </ul>
                    {/* <p>{this.props.gameText[0]}</p>
                    <p>{this.props.gameText[1]}</p>
                    <p>{this.props.gameText[2]}</p>
                    <p>{this.props.gameText[3]}</p>
                    <p>{this.props.gameText[4]}</p>
                    <p>{this.props.gameText[5]}</p>
                    <p>{this.props.gameText[6]}</p>
                    <p>{this.props.gameText[7]}</p> */}
                </div>
            </>
        );
    };
};
const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapReduxStateToProps)(Textbox);