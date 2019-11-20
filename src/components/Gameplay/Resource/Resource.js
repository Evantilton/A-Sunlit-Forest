import React, { Component } from 'react';



import { connect } from 'react-redux';

class Resource extends Component {

    buySap = () => {
        console.log("Buying Sap")
        if (this.props.storeEverything.resource_sunlight >= this.props.storeEverything.resource_sap_price
            && this.props.storeEverything.resource_sap < this.props.storeEverything.resource_sap_max) {
            this.props.dispatch({ type: 'BUY_SAP', payload: this.props.storeEverything.resource_sap_price })
        }
    }

    render() {

        return (
            <>
                <h1>Resources </h1>
                <span>
                    <p>Current Sunlight: {this.props.storeEverything.resource_sunlight}/{this.props.storeEverything.resource_sunlight_max}</p>
                    <p>Current Sap: {this.props.storeEverything.resource_sap}/{this.props.storeEverything.resource_sap_max} </p>
                    <button onClick={this.buySap}> Convert Sunlight into Sap </button>
                    <p>Current Science: {this.props.storeEverything.resource_science}/{this.props.storeEverything.resource_science_max} </p>
                    <p>Current treefolk: {this.props.storeEverything.resource_treefolk}/{this.props.storeEverything.resource_treefolk} </p>
                </span>
            </>
        );
    };
};
const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapReduxStateToProps)(Resource);