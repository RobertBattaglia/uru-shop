import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import RevParentComponent from './RevParentComponent.jsx';

import { fetchReviews, fetchMeta } from '../../actions/reviewsActions';

const ReviewsWrapper = (props) => {
  const {
    fetchReviews,
    fetchMeta,
    location: { pathname }
  } = props;

  // Fetching our data from the API
  useEffect(() => {
    fetchReviews(pathname);
    fetchMeta(pathname);
  });

  return (
    <React.Fragment>
      <RevParentComponent />
    </React.Fragment>
  );
};

// ReviewsWrapper.propTypes = {
//   fetchReviews: PropTypes.func.isRequired,
//   fetchMeta: PropTypes.func.isRequired,
//   location: PropTypes.object.isRequired
// };

const mapStateToProps = (store) => ({
  reviews: store.reviews,
  meta: store.meta
});

const mapDispatchToProps = (dispatch) => ({
  fetchReviews: (id) => {
    dispatch(fetchReviews(id));
  },
  fetchMeta: (id) => {
    dispatch(fetchMeta(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewsWrapper);
