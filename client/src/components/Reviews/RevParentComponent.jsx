import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

// Children Components
import MoreReviews from './MoreReviews';
import AddReviewModal from './AddReviewModal.jsx';
import Recommended from './Recommended.jsx';
import ComfortGraph from './ComfortGraph.jsx';
import SizeGraph from './SizeGraph.jsx';
import StarGraph from './StarGraph.jsx';
import ReviewList from './ReviewList.jsx';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'right-align',
    color: theme.palette.text.primary
  }
}));

const RevParentComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Paper className={classes.paper}>Ratings and Reviews</Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>Rating and Star</Paper>
          <Paper className={classes.paper}>
            <Recommended />
          </Paper>
          <Paper className={classes.paper}>
            {/* Star */}
            <div>
              1 <StarGraph variant="determinate" value={5} />
            </div>
            <div>
              2 <StarGraph variant="determinate" value={5} />
            </div>
            <div>
              3 <StarGraph variant="determinate" value={5} />
            </div>
            <div>
              4 <StarGraph variant="determinate" value={5} />
            </div>
            <div>
              5 <StarGraph variant="determinate" value={5} />
            </div>
          </Paper>
          <Paper className={classes.paper}>
            <SizeGraph />
          </Paper>
          <Paper className={classes.paper}>
            <ComfortGraph />
          </Paper>
        </Grid>
        <Grid item xs={9}>
          <Grid>
            <Paper className={classes.paper}>Sort By Relevance</Paper>
          </Grid>

          <Grid
          // item xs={9}
          >
            <ReviewList />
          </Grid>

          <Grid
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
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default RevParentComponent;
