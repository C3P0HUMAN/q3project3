let initialState = [];

export default(state = initialState, action) => {
  switch (action.type) {

    case 'ADD_REVIEWS_PENDING':
    console.log('maybe', action)
      return state;

    case 'ADD_REVIEWS_FULFILLED':
      console.log('payload', action.payload)
      return [...state, action.payload];

    default:
      return state;
  };
};
