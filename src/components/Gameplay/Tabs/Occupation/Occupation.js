import React, { Component } from 'react';

import { connect } from 'react-redux';

class Occupation extends Component {

    //Conditional Displays//

    displayTreefolk = () => {
        if (this.props.storeEverything.resource_treefolk_reveal) {
            return <div><p>Treefolk: {this.props.storeEverything.resource_treefolk}/{this.props.storeEverything.resource_treefolk} </p>
                <p>Unassigned Treefolk: {this.props.storeEverything.resource_treefolk_unassigned} </p>
                <p> </p>
                <p>Occupations:</p>
                <p>Thinker: {this.props.storeEverything.resource_scientist}/{this.props.storeEverything.resource_treefolk}

                </p>
            </div>
        };
    }

    displayTreefolkButton = () => {
        if (this.props.storeEverything.resource_treefolk_reveal) {
            return <> <div><button onClick={() => this.subtractThinker()}> - </button><button onClick={() => this.addThinker()}> + </button> </div></>
        }
    }

    //occupations besides thinker
    displayFarmer = () => {
        if (this.props.storeEverything.resource_population_reveal) {
            return <><div><p>FARMER {this.props.storeEverything.resource_farmer}/{this.props.storeEverything.resource_treefolk} </p></div>
                <div><button onClick={() => this.subtractFarmer()}> - </button><button onClick={() => this.addFarmer()}> + </button> </div></>
        };
    }
    displayGardener = () => {
        if (this.props.storeEverything.resource_population_reveal) {
            return <><div><p> GARDENER {this.props.storeEverything.resource_gardener}/{this.props.storeEverything.resource_treefolk} </p></div>
            <div><button onClick={() => this.subtractGardener()}> - </button><button onClick={() => this.addGardener()}> + </button> </div></>
        };
    }

    displayExplorer = () => {
        if (this.props.storeEverything.resource_population_reveal) {
            return <><div><p> EXPLORER: {this.props.storeEverything.resource_explorer}/{this.props.storeEverything.resource_treefolk} </p></div>
            <div><button onClick={() => this.subtractExplorer()}> - </button><button onClick={() => this.addExplorer()}> + </button> </div></>
        };
    }

    //Occupation Buttons
    subtractThinker = () => {
        console.log("subtracting Thinker")
        if (this.props.storeEverything.resource_scientist > 0) {
            this.props.dispatch({ type: 'SUBTRACT_THINKER' });
        }
    }

    addThinker = () => {
        console.log("Adding Thinker")
        if (this.props.storeEverything.resource_treefolk_unassigned > 0) {
            this.props.dispatch({ type: 'ADD_THINKER' });
        }
    }

    subtractFarmer = () => {
        if (this.props.storeEverything.resource_farmer > 0) {
            this.props.dispatch({ type: 'SUBTRACT_FARMER' });
        }
    }

    addFarmer = () => {
        if (this.props.storeEverything.resource_treefolk_unassigned > 0) {
            this.props.dispatch({ type: 'ADD_FARMER' });
        }
    }

    subtractGardener = () => {
        if (this.props.storeEverything.resource_gardener > 0) {
            this.props.dispatch({ type: 'SUBTRACT_GARDENER' });
        }
    }

    addGardener = () => {
        if (this.props.storeEverything.resource_treefolk_unassigned > 0) {
            this.props.dispatch({ type: 'ADD_GARDENER' });
        }
    }
    subtractExplorer = () => {
        console.log("subtracting Thinker")
        if (this.props.storeEverything.resource_explorer > 0) {
            this.props.dispatch({ type: 'SUBTRACT_EXPLORER' });
        }
    }

    addExplorer = () => {
        console.log("Adding Thinker")
        if (this.props.storeEverything.resource_treefolk_unassigned > 0) {
            this.props.dispatch({ type: 'ADD_EXPLORER' });
        }
    }

    displayOccupation = () => {
        if (this.props.storeEverything.tab_population_show) {
            return <><div><h1>Treefolk</h1>
                <table>
                    {this.displayTreefolk()}
                    {this.displayTreefolkButton()}
                    {this.displayFarmer()}
                    {this.displayGardener()}
                    {this.displayExplorer()}
                </table>
            </div>
            </>
        }
    }

    render() {

        return (
            <>
                <div>
                    {this.displayOccupation()}
                </div>
            </>
        );
    };
};
const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapReduxStateToProps)(Occupation);