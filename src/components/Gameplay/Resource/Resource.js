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

    useSunstone = () => {
        console.log("using Sunstone")
        if ((this.props.storeEverything.resource_sunstone > 0) && (this.props.storeEverything.resource_treefolk_reveal === false)) {
            this.props.dispatch({ type: 'BUY_TREEFOLK' });
            this.props.dispatch({ type: 'TEXT', payload: this.props.storeEverything.resource_sunstone_text });
        } else if ((this.props.storeEverything.resource_sunstone > 0)) {
            this.props.dispatch({ type: 'BUY_TREEFOLK' });
            this.props.dispatch({ type: 'TEXT', payload: this.props.storeEverything.research_sunstone_text });
        } 
    }

    //Conditional Displays//
    displaySunlight = () => {
        if (this.props.storeEverything.resource_sunlight_reveal) {
            return <div><span className="resource">Sunlight: {this.props.storeEverything.resource_sunlight}/{this.props.storeEverything.resource_sunlight_max} </span> <span className="resource">Sunlight Per Click: {this.props.storeEverything.click_gather_sunlight}</span> </div>
        };
    }
    displaySap = () => {
        if (this.props.storeEverything.resource_sap_reveal) {
            return <span className="resource">Sap: {this.props.storeEverything.resource_sap}/{this.props.storeEverything.resource_sap_max} <button onClick={this.buySap}> Produce Sap </button></span>
        };
    }
    displaySapButton = () => {
        if (this.props.storeEverything.resource_sap_reveal) {
            return <span className="resource"><button onClick={this.buySap}> Convert Sunlight into Sap </button> </span>
        };
    }
    displayScience = () => {
        if (this.props.storeEverything.resource_science_reveal) {
            return <span className="resource">Science: {this.props.storeEverything.resource_science}/{this.props.storeEverything.resource_science_max} </span>
        };
    }

    displayPopulation = () => {
        if (this.props.storeEverything.resource_population_reveal) {
            return <div><span className="resource">Population {this.props.storeEverything.resource_population}</span></div>
        };
    }
    displaySunstone = () => {
        if (this.props.storeEverything.resource_sunstone_reveal) {
            return <span className="resource">Sunstones: {this.props.storeEverything.resource_sunstone} <button onClick={() => this.useSunstone()}> Use Sunstone</button></span>
        };
    }
    // displaySunstoneButton = () => {
    //     if (this.props.storeEverything.resource_sunstone_reveal) {
    //         return <span className="resource"><button onClick={() => this.useSunstone()}> Use Sunstone</button></span>
    //     };
    // }

    displaySoil = () => {
        if (this.props.storeEverything.resource_soil_reveal) {
            return <span className="resource">Soil: {this.props.storeEverything.resource_soil}/{this.props.storeEverything.resource_soil_max}</span>
        }
    }


    render() {

        return (
            <>
                <div className="column" id="left-container">
                {/* <span className="resource"><h1>Resources</h1> </span> */}
                    <span>
                        {this.displaySunlight()}
                        {this.displaySap()}
                        {/* {this.displaySapButton()} */}
                        {this.displayScience()}
                        {this.displayPopulation()}
                        {this.displaySunstone()}
                        {/* {this.displaySunstoneButton()} */}
                        {this.displaySoil()}
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