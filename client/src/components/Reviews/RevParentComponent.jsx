import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, Dialog } from '@material-ui/core';

import {
  fetchReviews,
  fetchMeta,
  openReviews
} from '../../actions/reviewsActions';

// Child Components
import Recommended from './Recommended.jsx';
import SizeGraph from './SizeGraph.jsx';
import ReviewList from './ReviewList.jsx';
import StarGraphsList from './StarGraphsList.jsx';
import ReviewCounter from './ReviewCounter';
import SelectControl from './Relevance';
import AverageRev from './AverageRev';
// import MoreReviews from './MoreReviews';
import AddReviewModal from './AddReviewModal';

// Testing Form
import Form from './Form/Form';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: '40px 0px'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'right-align',
    color: theme.palette.text.primary,
    fontSize: 15
  }
}));

const RevParentComponent = (props) => {
  const classes = useStyles();

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

  // More Reviews Buttons
  const handleOpen = () => {
    openReviews(true);
  };

  const handleClose = () => {
    openReviews(false);
  };

  const renderButtons = () => {
    const { showReviews, limit } = props;

    let moreReviewsButton = (
      <Button
        variant="outlined"
        onClick={handleLimit.bind(this)}
        style={{ padding: '10px', margin: '10px', fontSize: 20 }}
      >
        MORE REVIEWS
      </Button>
    );

    let addButton = <AddReviewModal handleClose={handleOpen.bind(this)} />;

    if (showReviews - limit > 0) {
      return (
        <Grid>
          {moreReviewsButton}
          {addButton}
        </Grid>
      );
    } else {
      return addButton;
    }
  };

  return (
    <div className={classes.root} id="reviews">
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Paper className={classes.paper}>RATINGS AND REVIEWS</Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item>
          <Paper className={classes.paper}>
            <AverageRev />
          </Paper>
          <Paper className={classes.paper}>
            <Recommended />
          </Paper>
          <Paper className={classes.paper}>
            <StarGraphsList />
          </Paper>
          <Paper className={classes.paper}>
            <SizeGraph />
          </Paper>
        </Grid>

        {/* Right side, Review List, Count, Sort, and "More"/"Add" Buttons */}
        {/* <Grid item xs={9} style={{ fontSize: 20, fontWeight: 700 }}>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-end"
          >
            <ReviewCounter /> {'   '} <SelectControl />
          </Grid> */}
        {/* </Grid> */}

        {/* List */}
        <Grid>
          <ReviewList />
        </Grid>

        {/* Load and Add Buttons */}
        <Box className={classes.buttons}>
          {renderButtons()}
          <Dialog
            open={props.open}
            onClose={handleClose}
            fullWidth={true}
            maxWidth="sm"
          >
            <AddReviewModal handleClose={handleClose.bind(this)} />
          </Dialog>
        </Box>
      </Grid>
    </div>
  );
};

// RevParentComponent.propTypes = {
//   fetchReviews: PropTypes.func.isRequired,
//   fetchMeta: PropTypes.func.isRequired,
//   location: PropTypes.object.isRequired
// };

// FIXME: i don't think I need this...
const mapStateToProps = (store) => ({
  reviews: store.reviews.data,
  meta: store.reviews.meta,
  limit: store.reviewsLimit,
  showRev: store.reviewsShow
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
)(RevParentComponent);
