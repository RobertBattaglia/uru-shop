import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedPhoto: 0 };
  }

  render() {
    const { selectedPhoto } = this.state;
    const { styles, selectedStyle } = this.props;
    return (
      <React.Fragment>
        <img style={{ width: '100%', height: 'auto' }} src={styles[selectedStyle].photos[selectedPhoto].url} alt="product" />
      </React.Fragment>
    );
  }
}

Carousel.propTypes = {
  styles: PropTypes.array.isRequired,
  selectedStyle: PropTypes.number.isRequired
};

const mapStateToProps = store => ({
  styles: store.product.styles,
  selectedStyle: store.product.selectedStyle
});

export default connect(mapStateToProps)(Carousel);
