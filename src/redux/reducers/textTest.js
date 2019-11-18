// Used to store the database information returned from the server
const textTest = (state = [], action) => {
    switch (action.type) {
        case 'TEST_TEXT':
            return [action.payload, ...state, ];
        default:
            return state;
    }
  }
    // user will be on the redux state at:
    // state.user
    export default textTest;