import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import productReducer from './reducers/productReducer';
import {
  reviewsReducer,

  // Refactor for later
  // metaReducer,
  openReducer,
  sortReducer,
  showReducer,
  limitReducer
} from './reducers/reviewsReducer';
import questionsReducer from './reducers/questionsReducer';
import relatedReducer from './reducers/relatedReducer';
// import sortReducer from './reducers/sortReducer';

const rootReducer = combineReducers({
  product: productReducer,
  questions: questionsReducer,
  reviews: reviewsReducer,
  related: relatedReducer,
  openReviews: openReducer,
  reviewSort: sortReducer,
  reviewsShow: showReducer,
  reviewsLimit: limitReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(ReduxThunk))
);

export default store;
