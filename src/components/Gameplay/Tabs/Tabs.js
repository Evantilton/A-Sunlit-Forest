import React, { Component } from 'react';

import { connect } from 'react-redux';

class Tabs extends Component {

    componentDidMount() {
        setInterval(() => {
            this.gatherSunlight();
        }, 1000);
    }

    gatherSunlight = () => {
        console.log("gathering Sunlight")
        if (this.props.storeEverything.resource_sunlight >= this.props.storeEverything.resource_sunlight_max) {
            this.props.dispatch({ type: 'GATHER_SUNLIGHT_MAX', payload: this.props.storeEverything.resource_sunlight_max })

        } else
            this.props.dispatch({ type: 'GATHER_SUNLIGHT', payload: this.props.storeEverything.click_gather_sunlight })
    }

    upgradeRoots = () => {
        console.log("upgrading Roots")
    }


    render() {

        return (
            <>
                <div className="column" id="middle-container">
                    <h1>Tabs</h1>
                    <button onClick={this.gatherSunlight}> gather sunlight </button>
                    <button onClick={this.upgradeRoots}> Expand Roots </button>
                </div>
            </>
        );
    };
};
const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapReduxStateToProps)(Tabs);