import React, { Component } from 'react';

import { connect } from 'react-redux';

class Garden extends Component {

    displayGarden = () => {
        if (this.props.storeEverything.tab_garden_show) {
            return <div>
                <h1>GARDEN</h1>
            </div>
        }
    }

    render() {

        return (
            <>
                <div>
                    {this.displayGarden()}
                </div>
            </>
        );
    };
};
const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapReduxStateToProps)(Garden);