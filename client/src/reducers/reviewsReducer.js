const intialState = { data: { results: [] } };

const reviewsReducer = (state = intialState, action) => {
  switch (action.type) {
    case 'FETCH_REVIEWS_SUCCESS':
      return { ...state, data: action.payload };
    case 'FETCH_REVIEWS_FAILURE':
      return state;
    case 'FETCH_META_SUCCESS':
      return { ...state, meta: action.payload };
    case 'FETCH_META_FAILURE':
      return state;
    case 'POST_REVIEWS_SUCCESS':
      return { ...state, data: action.payload };
    case 'POST_REVIEWS_FAILURE':
      return state;
    default:
      return state;
  }
};

// const metaInit = {
//   meta: {
//     ratings: {},
//     recommended: {},
//     characteristics: {}
//   }
// };

// const metaReducer = (state = metaInit, action) => {
//   switch (action.type) {
//     case 'FETCH_META_SUCCESS':
//       return { ...state, meta: action.payload };
//     case 'FETCH_META_FAILURE':
//       return state;
//     default:
//       return state;
//   }
// };

const openReducer = (state = false, { type, payload }) => {
  switch (type) {
    case 'OPEN_REVIEWS':
      return payload;
    default:
      return state;
  }
};

const limitReducer = (state = 2, { type, payload }) => {
  switch (type) {
    case 'LIMIT_REVIEWS':
      return payload;
    default:
      return state;
  }
};

const sortReducer = (state = 'relevant', { type, payload }) => {
  switch (type) {
    case 'REVIEWS_SORT':
      return payload;
    default:
      return state;
  }
};

const showReducer = (state = 2, { type, payload }) => {
  switch (type) {
    case 'SHOW_REVIEWS':
      return payload;
    default:
      return state;
  }
};

export {
  reviewsReducer,
  openReducer,
  limitReducer,
  sortReducer,
  showReducer
  // Refactor for later
  // , metaReducer
};
