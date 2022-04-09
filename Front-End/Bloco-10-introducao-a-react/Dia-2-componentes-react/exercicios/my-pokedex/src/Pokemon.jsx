import React, { Component } from 'react';
 // import PropTypes from 'prop-types';

class Pokemon extends Component {
  render() {
    const { name, type, image } = this.props.pokemon;
    const { value, measurementUnit } = this.props.pokemon.averageWeight;
    return (
      <div className="poke-container" >
        <p>{name}</p>
        <p>{type}</p>
        <p>{`Average Weight: ${value} ${measurementUnit}`}</p>
        <img src={image} alt={name} className='poke-image'/>
      </div>
    );
  }
}

/*Pokemon.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  measurementUnit: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}*/

export default Pokemon;