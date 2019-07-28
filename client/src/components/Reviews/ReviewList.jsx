// import React, { Component } from 'react';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Grid } from '@material-ui/core';

import {
  fetchReviews,
  fetchMeta,
  sortReviews,
  openReviews
} from '../../actions/reviewsActions';

import ReviewEntry from './ReviewEntry';
import ReviewCounter from './ReviewCounter';
import SelectControl from './Relevance';

import MoreReviews from './MoreReviews';
import AddReviewModal from './AddReviewModal';

// class ReviewList extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       increment: 2,
//       limit: 2
//     };
//     this.loadMore = this.loadMore.bind(this);
//   }

//   loadMore() {
//     this.setState({
//       limit: this.state.limit + this.state.increment
//     });
//   }

//   render() {
//     const { data } = this.props.reviews;
//     // const { product } = this.props.data;
//     const { fetchReviews } = this.props;

//     return !data ? (
//       <h3>...Loading reviews</h3>
//     ) : (
//       <div>
//         {data.results.slice(0, this.state.limit).map((review) => {
//           return (
//             <div key={review.review_id}>
//               <ReviewEntry review={review} />
//             </div>
//           );
//         })}

//         {/* Buttons */}
//         <Grid
//           container
//           alignItems="baseline"
//           spacing={6}
//           justify="flex-start"
//           direction="row"
//         >
//           <Grid item onClick={this.loadMore}>
//             <MoreReviews />
//           </Grid>
//           <Grid item>
//             <AddReviewModal />
//           </Grid>
//         </Grid>
//       </div>
//     );
//   }
// }

const ReviewList = (props) => {
  const { reviews, limit, reviewsShow } = props;

  const renderReviews = () => {
    // const { limit } = props;

    let reviewsList = reviews.map((review) => {
      return <ReviewEntry key={review.review_id} review={review} />;
    });

    reviewsShow(reviewsList.length);
    
    return reviewsList.slice(0, limit);
  };

  return !reviews ? (
    <h3>...Loading reviews</h3>
  ) : (
    <div>
      {/* Reviews List Summary and Select */}
      <Grid item xs={9} style={{ fontSize: 20, fontWeight: 700 }}>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-end"
        >
          <ReviewCounter /> {'   '} <SelectControl />
        </Grid>
      </Grid>
      {renderReviews()}
      {/* 
      
      TODO: DELTE, this is handled in renderfunction Each Entry

      {reviews.results.slice(0, this.state.limit).map((review) => {
        return (
          <div key={review.review_id}>
            <ReviewEntry review={review} />
          </div>
        );
      })} */}

      {/* TODO: DELETE, MOVED TO PARENT COMP Buttons */}
      {/* <Grid
        container
        alignItems="baseline"
        spacing={6}
        justify="flex-start"
        direction="row"
      >
        <Grid item>
          <MoreReviews />
        </Grid>
        <Grid item>
          <AddReviewModal />
        </Grid>
      </Grid> */}
    </div>
  );
};

const mapStateToProps = (store) => ({
  reviews: store.reviews.data,
  meta: store.reviews.meta,
  limit: store.reviewsLimit
});

const mapDispatchToProps = (dispatch) => ({
  fetchReviews: (productId, sort) => {
    dispatch(fetchReviews(productId, sort));
  },
  fetchMeta: (prodId) => {
    dispatch(fetchMeta(prodId));
  },
  reviewsShow: (length) => {
    dispatch(reviewsShow(length));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewList);
