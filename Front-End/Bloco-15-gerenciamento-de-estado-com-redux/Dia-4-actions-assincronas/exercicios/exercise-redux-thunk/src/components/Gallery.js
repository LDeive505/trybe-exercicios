import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import defaultCat from '../images/detCat.gif';

class Gallery extends Component {
  render() {
    const { imgPath, isLoading, useDefaultImg, error } = this.props;
    return (
      <div className="gallery-container">
        { isLoading && <div>LOADING...</div> }
        { !useDefaultImg && <p>{error}</p>}
        { useDefaultImg && <img src={ defaultCat } alt="default cat" /> }
        { !isLoading && !useDefaultImg && <img src={ imgPath } alt="random cat" /> }
      </div>
    );
  }
}

Gallery.propTypes = {
  imgPath: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  useDefaultImg: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  imgPath: state.gallery.imgURL,
  isLoading: state.gallery.isLoading,
  useDefaultImg: state.gallery.defaultImg,
  error: state.gallery.error
});

export default connect(mapStateToProps)(Gallery);
