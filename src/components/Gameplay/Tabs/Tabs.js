import React, { Component } from 'react';

import { connect } from 'react-redux';

class Tabs extends Component {

    componentDidMount() {
        setInterval(() => {
            this.treeFarm();
        }, 1000);
    }
    //local state for conditional renders of mouseovers
    state = {
        displaySunlight: false,
        displayRoots: false,
        displayChlorophyll: false,
    }
    //Logic for button presses
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
        } else if ((this.props.storeEverything.resource_sunlight + (this.props.storeEverything.resource_population * .5) > this.props.storeEverything.resource_sunlight_max)) {
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
    //conditional displays MAIN COMPONENTS//
    displayChlorophyll = () => {
        if (this.props.storeEverything.upgrade_chlorophyll_reveal) {
            return <span class="span" onClick={this.upgradeChlorophyll} 
            onMouseOver={this.chlorophyllMouseOver} onMouseOut={this.chlorophyllMouseOver}> Chlorophyll Infusion</span>
        };
    }
    //MOUSEOVERS
    sunlightMouseOver = () => {
        this.setState({
            displaySunlight: !this.state.displaySunlight,
            displayRoots: false,
            displayChlorophyll: false,
        })
    }
    rootsMouseOver = () => {
        this.setState({
            displaySunlight: false,
            displayRoots: !this.state.displayRoots,
            displayChlorophyll: false,
        })
    }
    chlorophyllMouseOver = () => {
        this.setState({
            displaySunlight: false,
            displayRoots: false,
            displayChlorophyll: !this.state.displayChlorophyll,
        })
    }
    //DISPLAY TEXT ON MOUSEOVERS
    displaySunlightText = () => {
        if (this.state.displaySunlight) {
            return <span class="floatSpan"> Sunlight Text </span>
        }
    }
    displayRootsText = () => {
        if (this.state.displayRoots) {
            return <span class="floatSpan"> 
            <p> {this.props.storeEverything.upgrade_roots_text}</p>
              <p>Level: {this.props.storeEverything.upgrade_roots}</p>         
              <p>Sap Cost: {this.props.storeEverything.upgrade_roots_cost}</p> 
            </span>
        }
    }
    displayChlorophyllText = () => {
        if (this.state.displayChlorophyll) {
            return <span class="floatSpan">  
                <p> {this.props.storeEverything.upgrade_chlorophyll_text}</p>
              <p>Level: {this.props.storeEverything.upgrade_chlorophyll}</p>         
              <p>Sap Cost: {this.props.storeEverything.upgrade_chlorophyll_cost}</p> 
              </span>
        }
    }

    render() {

        return (
            <>
                <div className="column" id="middle-container">
                    <h1>Tabs</h1>
                    <table>
                        <tr>
                            <td>
                                <span class="span" onClick={this.gatherSunlight} onMouseOver={this.sunlightMouseOver} onMouseOut={this.sunlightMouseOver}> Gather Sunlight </span>
                            </td>
                            {/* <td>
                                {this.displaySunlightText()}
                                {this.displayRootsText()}
                                {this.displayChlorophyllText()}
                            </td> */}
                        </tr>
                        <tr>
                            <span class="span" onClick={this.upgradeRoots} onMouseOver={this.rootsMouseOver} onMouseOut={this.rootsMouseOver}> Expand Roots  Current Level: {this.props.storeEverything.upgrade_roots} Cost in Sap: {this.props.storeEverything.upgrade_roots_cost}</span>
                        </tr>
                        <tr>
                            {this.displayChlorophyll()}
                        </tr>
                    </table>
                    {this.displaySunlightText()}
                    {this.displayRootsText()}
                    {this.displayChlorophyllText()}
                </div>
            </>
        );
    };
};
const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapReduxStateToProps)(Tabs);