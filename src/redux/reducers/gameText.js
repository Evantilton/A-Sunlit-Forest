// Used to store the database information returned from the server
const gameText = (state = [], action) => {
    switch (action.type) {
        case 'TEXT':
            if (state.length > 5) {
                let newState = [action.payload, state[0], state[1], state[2], state[3], state[4], state[5]]
            state = newState
            return state
            } else {
            return [action.payload, ...state,]};
        default:
            return state;
    }
  }
    // user will be on the redux state at:
    // state.user
    export default gameText;