import React, { Component } from 'react';

import { connect } from 'react-redux';

class Occupation extends Component {

    //Conditional Displays//

    displayTreefolk = () => {
        if (this.props.storeEverything.resource_treefolk_reveal) {
            return <div><span className="resource">Treefolk: {this.props.storeEverything.resource_treefolk}/{this.props.storeEverything.resource_treefolk} </span>
                <span className="resource">Unassigned Treefolk: {this.props.storeEverything.resource_treefolk_unassigned} </span>
                <p> </p>
                <span className="resource">Occupations:</span>
                <span className="resource">Thinker: {this.props.storeEverything.resource_scientist}/{this.props.storeEverything.resource_treefolk} <button onClick={() => this.subtractThinker()}> - </button><button onClick={() => this.addThinker()}> + </button>

                </span>
            </div>
        };
    }

    // displayTreefolkButton = () => {
    //     if (this.props.storeEverything.resource_treefolk_reveal) {
    //         return <> <div><button onClick={() => this.subtractThinker()}> - </button><button onClick={() => this.addThinker()}> + </button> </div></>
    //     }
    // }

    //occupations besides thinker
    displayFarmer = () => {
        if (this.props.storeEverything.resource_farmer_reveal === true) {
            return <><div><span className="resource">Farmer {this.props.storeEverything.resource_farmer}/{this.props.storeEverything.resource_treefolk} <button onClick={() => this.subtractFarmer()}> - </button><button onClick={() => this.addFarmer()}> + </button> </span></div>
                </>
        };
    }
    displayGardener = () => {
        if (this.props.storeEverything.resource_gardener_reveal === true) {
            return <><div><span className="resource"> Gardener {this.props.storeEverything.resource_gardener}/{this.props.storeEverything.resource_treefolk} <button onClick={() => this.subtractGardener()}> - </button><button onClick={() => this.addGardener()}> + </button>  </span></div>
            <div></div></>
        };
    }

    displayExplorer = () => {
        if (this.props.storeEverything.resource_explorer_reveal === true) {
            return <><div><span className="resource">Explorer: {this.props.storeEverything.resource_explorer}/{this.props.storeEverything.resource_treefolk} {this.expedition()} </span></div></>
        };
    }
    expedition() {
        if ((this.props.storeEverything.exploration_reveal === true)) {
            return <p>On Expedition</p>
        } else if ((this.props.storeEverything.exploration_reveal === false)) {
           return  <> <button onClick={() => this.subtractExplorer()}> - </button><button onClick={() => this.addExplorer()}> + </button> </>
        }
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
            return <><div>
                    <table>
                    {this.displayTreefolk()}
                   
                    {/* {this.displayTreefolkButton()} */}
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