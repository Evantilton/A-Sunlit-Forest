// Used to store the database information returned from the server


const storeEverything = (state = {}, action) => {
  switch (action.type) {
    case 'STORE_GET_EVERYTHING':
        console.log("in store get everything")
      return action.payload[0];
    case 'GATHER_SUNLIGHT':
        console.log("in gather sunlight")
      return {...state,resource_sunlight_reveal: true, resource_sunlight: state.resource_sunlight+state.click_gather_sunlight};
    case 'GATHER_SUNLIGHT_MAX':
        console.log("in gather sunlight max")
      return{...state, resource_sunlight: state.resource_sunlight_max}
    case 'BUY_SAP':
      console.log("in buying sap")
      return {...state,resource_sap: state.resource_sap + 1, resource_sunlight: (state.resource_sunlight) - (state.resource_sap_cost)};
    case 'REVEAL_CHLOROPHYLL':
        console.log("in reveal chlorophyll")
      return {...state,upgrade_chlorophyll_reveal: true, upgrade_roots_reveal: true, resource_sap_reveal: true};
    case 'UPGRADE_CHLOROPHYLL':
        console.log("in upgrade chlorophyll")
      return {...state, upgrade_chlorophyll:state.upgrade_chlorophyll+1, click_gather_sunlight: state.click_gather_sunlight+1, upgrade_chlorophyll_cost: state.upgrade_chlorophyll_cost * 1.2};
    case 'UPGRADE_ROOTS':
        console.log("in upgrade roots")
      return {...state, resource_population_reveal: true, resource_population: state.resource_population + action.payload, upgrade_roots: state.upgrade_roots+1, upgrade_roots_cost: state.upgrade_roots_cost * 1.2};
    case 'TREE_FARM':
        console.log("tree farm")
      return {...state, resource_sunlight: state.resource_sunlight + (state.resource_population * .5)};
    case 'RESOURCE_SUNSTONE':
        console.log("in resource sunstone")
        return {...state, resource_sunstone_reveal: true, resource_sunstone: state.resource_sunstone + 1};
    case 'BUY_TREEFOLK':
        console.log("in buy treefolk")
        return {...state, resource_treefolk_reveal: true, resource_sunstone: state.resource_sunstone - 1, resource_treefolk_unassigned: state.resource_treefolk_unassigned+1, resource_treefolk: state.resource_treefolk+1};
    case 'SUBTRACT_THINKER':
        console.log("in subtract thinker")
        return {...state, resource_treefolk_unassigned: state.resource_treefolk_unassigned + 1, resource_scientist: state.resource_scientist - 1};
    case 'ADD_THINKER':
        console.log("in add thinker")
        return {...state, resource_treefolk_unassigned: state.resource_treefolk_unassigned - 1, resource_science_reveal: true, resource_scientist: state.resource_scientist+1};
    case 'RESEARCH':
        console.log("researching")
        return{...state, resource_science: state.resource_science + (state.resource_scientist * state.resource_scientist_modifier)}
        default:
      return state;
  }
}
// user will be on the redux state at:
// state.user
export default storeEverything;
