import React, { Component } from 'react';

import { connect } from 'react-redux';

class Tabs extends Component {

    componentDidMount() {
        setInterval(() => {
            this.treeFarm();
        }, 1000);
    }

    gatherSunlight = () => {
        console.log("gathering Sunlight")
        if (this.props.storeEverything.resource_sunlight >= this.props.storeEverything.resource_sunlight_max) {
            this.props.dispatch({ type: 'GATHER_SUNLIGHT_MAX', payload: this.props.storeEverything.resource_sunlight_max })

        } else if ((this.props.storeEverything.upgrade_chlorophyll_reveal === false) && (this.props.storeEverything.resource_sunlight > 100)) {
            this.props.dispatch({ type: 'REVEAL_CHLOROPHYLL' })
        } else
            this.props.dispatch({ type: 'GATHER_SUNLIGHT', payload: this.props.storeEverything.click_gather_sunlight })
    }
    treeFarm = () => {
        if (this.props.storeEverything.resource_sunlight >= this.props.storeEverything.resource_sunlight_max) {
            this.props.dispatch({ type: 'GATHER_SUNLIGHT_MAX', payload: this.props.storeEverything.resource_sunlight_max })
        } else if ((this.props.storeEverything.resource_sunlight+(this.props.storeEverything.resource_population*.5)>this.props.storeEverything.resource_sunlight_max)){
            this.props.dispatch({ type: 'GATHER_SUNLIGHT_MAX', payload: this.props.storeEverything.resource_sunlight_max })
        }
        else if (this.props.storeEverything.resource_population > 0) {
            console.log("IN TREEFARM")
            this.props.dispatch({ type: 'TREE_FARM' })
        }
    }

    upgradeRoots = () => {
        console.log("upgrading Roots")
        // if (this.props.storeEverything.resource_sap >= this.props.storeEverything.upgrade_roots_cost) {
        this.props.dispatch({ type: 'UPGRADE_ROOTS', payload: (Math.floor(Math.random() * (7 - 1)) + 1) })
        // } 
    }

    upgradeChlorophyll = () => {
        if (this.props.storeEverything.resource_sap >= this.props.storeEverything.upgrade_chlorophyll_cost) {
            this.props.dispatch({ type: 'UPGRADE_CHLOROPHYLL' })
        }
    }
    //conditional displays//
    displayChlorophyll = () => {
        if (this.props.storeEverything.upgrade_chlorophyll_reveal) {
            return <button onClick={this.upgradeChlorophyll}> Upgrade Chlorophyll, Level: {this.props.storeEverything.upgrade_chlorophyll} cost: sap {this.props.storeEverything.upgrade_chlorophyll_cost} </button>
        };
    }


    render() {

        return (
            <>
                <div className="column" id="middle-container">
                    <h1>Tabs</h1>
                    <button onClick={this.gatherSunlight}> Gather Sunlight </button>
                    {/* <button onClick={this.upgradeChlorophyll}>Upgrade Chlorophyll</button> */}
                    <button onClick={this.upgradeRoots} > Expand Roots  Current Level: {this.props.storeEverything.upgrade_roots} Cost in Sap: {this.props.storeEverything.upgrade_roots_cost}</button>
                    {this.displayChlorophyll()}

                </div>
            </>
        );
    };
};
const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapReduxStateToProps)(Tabs);