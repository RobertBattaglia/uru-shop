import { connect } from 'react-redux';
import React from 'react';

const ReviewCounter = ({ meta }) => {
  const countReviews = (ratings) => {
    const vals = Object.values(ratings);
    return vals.reduce((a, b) => {
      return a + b;
    });
  };

  return !meta ? (
    <h5>... Loading no. of reviews</h5>
  ) : (
    <div>
      <span> {countReviews(meta.ratings)} reviews, sorted by </span>
    </div>
  );
};

const mapStateToProps = (store) => ({
  meta: store.reviews.meta
});

export default connect(mapStateToProps)(ReviewCounter);
