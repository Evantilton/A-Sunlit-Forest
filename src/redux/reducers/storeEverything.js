// Used to store the database information returned from the server


const storeEverything = (state = {}, action) => {
  switch (action.type) {
    case 'STORE_GET_EVERYTHING':
      return action.payload[0];
    case 'GATHER_SUNLIGHT':
      return {...state,resource_sunlight_reveal: true, resource_sunlight: state.resource_sunlight+action.payload};
    case 'GATHER_SUNLIGHT_MAX':
      return{...state, resource_sap_reveal: true, resource_sunlight: state.resource_sunlight_max}
    case 'BUY_SAP':
      return {...state,resource_sap: state.resource_sap+1, resource_sunlight: (state.resource_sunlight) - (state.resource_sap_cost)};
    case 'REVEAL_CHLOROPHYLL':
        return {...state,upgrade_chlorophyll_reveal: true};
    case 'UPGRADE_CHLOROPHYLL':
          return {...state, upgrade_chlorophyll:state.upgrade_chlorophyll+1, click_gather_sunlight: state.click_gather_sunlight+1, upgrade_chlorophyll_cost: state.upgrade_chlorophyll_cost * 5};

      default:
      return state;
  }
}
// user will be on the redux state at:
// state.user
export default storeEverything;
