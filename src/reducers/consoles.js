let initialState = [];

export default(state = initialState, action) => {
  switch (action.type) {

    case 'FETCH_CONSOLES_PENDING':
      return state;

    case 'FETCH_CONSOLES_FULFILLED':
    console.log('payload',  action.payload)
      return [...action.payload.data];

    case 'FETCH_CONSOLES_REJECTED':
      return state;

    default:
      return state;
  }
};

var counter = 0;
function makeId() {
  return counter++;
}
