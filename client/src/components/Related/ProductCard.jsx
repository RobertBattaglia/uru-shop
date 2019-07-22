/* eslint react/jsx-indent: "off" */
/* eslint react/prop-types: "off" */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles(theme => ({
  card: {
    width: '30vw',
    height: '27vw'
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9 ascpect ratio
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

const ProductCard = (props) => {
  const classes = useStyles();

  const {
 category, name, defaultPrice, image, id 
} = props;

  const useStateWithLocalStorage = (localStorageKey) => {
    const [value, setValue] = React.useState(
      localStorage.getItem(localStorageKey) || ''
    );

    React.useEffect(() => {
      localStorage.setItem(localStorageKey, value);
    }, [value]);

    return [value, setValue];
  };

  const [value, setValue] = useStateWithLocalStorage('myValueInLocalStorage');

  if (image) {
    return (
      <Card className={classes.card}>
        <Link to={`/${id}`} style={{ textDecoration: 'none' }}>
          <CardHeader
            title={name}
            subheader={`$${defaultPrice}`}
            style={{ height: '10vw' }}
          />
          <CardMedia
            className={classes.media}
            image={image.photo.results[0].photos[0].thumbnail_url}
            title={name}
          />
        </Link>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {category}
          </Typography>
        </CardContent>

        <CardActions disableSpacing>
          <IconButton aria-label="Add to favorites">
            <div className="favorite">
              <FavoriteIcon hovercolor="red" />
            </div>
          </IconButton>
          {/* <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton> */}
          <IconButton
            // className={clsx(classes.expand, {
            //   [classes.expandOpen]: expanded
            // })}
            // onClick={handleExpandClick}
            // aria-expanded={expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        {/* in={expanded} */}
        <Collapse timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron
              and set aside for 10 minutes.
            </Typography>
            <Typography paragraph>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
              over medium-high heat. Add chicken, shrimp and chorizo, and cook,
              stirring occasionally until lightly browned, 6 to 8 minutes.
              Transfer shrimp to a large plate and set aside, leaving chicken
              and chorizo in the pan. Add pimentón, bay leaves, garlic,
              tomatoes, onion, salt and pepper, and cook, stirring often until
              thickened and fragrant, about 10 minutes. Add saffron broth and
              remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
            <Typography paragraph>
              Add rice and stir very gently to distribute. Top with artichokes
              and peppers, and cook without stirring, until most of the liquid
              is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add
              reserved shrimp and mussels, tucking them down into the rice, and
              cook again without stirring, until mussels have opened and rice is
              just tender, 5 to 7 minutes more. (Discard any mussels that don’t
              open.)
            </Typography>
            <Typography>
              Set aside off of the heat to let rest for 10 minutes, and then
              serve.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
  return null;
};

ProductCard.propTypes = {
  category: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  defaultPrice: PropTypes.string.isRequired
};

export default ProductCard;
