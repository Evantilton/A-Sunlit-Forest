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
                </div>
            </>
        );
    };
};
const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapReduxStateToProps)(Textbox);