import React, { Component } from 'react';



import { connect } from 'react-redux';

class Resource extends Component {
    
//function call
    buySap = () => {
        console.log("Buying Sap")
        if (this.props.storeEverything.resource_sunlight >= this.props.storeEverything.resource_sap_cost
            && this.props.storeEverything.resource_sap < this.props.storeEverything.resource_sap_max) {
            this.props.dispatch({ type: 'BUY_SAP', payload: this.props.storeEverything.resource_sap_cost })
        }
    }

    //Conditional Displays//
    displaySunlight = () => {
        if (this.props.storeEverything.resource_sunlight_reveal) {
            return <div><p>Current Sunlight: {this.props.storeEverything.resource_sunlight}/{this.props.storeEverything.resource_sunlight_max} </p>Sunlight Per Click: {this.props.storeEverything.click_gather_sunlight}<p></p> </div>   
        };
    }
    displaySap = () => {
        if (this.props.storeEverything.resource_sap_reveal) {
            return <p>Current Sap: {this.props.storeEverything.resource_sap}/{this.props.storeEverything.resource_sap_max} </p>
        };
    }
    displaySapButton = () => {
        if (this.props.storeEverything.resource_sap_reveal) {
            return <button onClick={this.buySap}> Convert Sunlight into Sap </button>
        };
    }
    displayScience = () => {
        if (this.props.storeEverything.resource_science_reveal) {
            return <p>Current Science: {this.props.storeEverything.resource_science}/{this.props.storeEverything.resource_science_max} </p>
        };
    }
    displayTreefolk = () => {
        if (this.props.storeEverything.resource_treefolk_reveal) {
            return <p>Current treefolk: {this.props.storeEverything.resource_treefolk}/{this.props.storeEverything.resource_treefolk} </p>
        };
    }

    render() {

        return (
            <>
                <div className="column" id="left-container">
                    <h1>Resources </h1>
                    <span>
                        {/* <p>Current Sunlight: {this.props.storeEverything.resource_sunlight}/{this.props.storeEverything.resource_sunlight_max}</p>
                        <p>Current Sap: {this.props.storeEverything.resource_sap}/{this.props.storeEverything.resource_sap_max} </p>
                        <button onClick={this.buySap}> Convert Sunlight into Sap </button>
                        <p>Current Science: {this.props.storeEverything.resource_science}/{this.props.storeEverything.resource_science_max} </p>
                        <p>Current treefolk: {this.props.storeEverything.resource_treefolk}/{this.props.storeEverything.resource_treefolk} </p> */}
                        {this.displaySunlight()}
                        {this.displaySap()}
                        {this.displaySapButton()}
                        {this.displayScience()}
                        {this.displayTreefolk()}
                    </span>
                </div>
            </>
        );
    };
};
const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapReduxStateToProps)(Resource);