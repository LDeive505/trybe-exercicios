import React, { Component } from 'react'
import Pokemon from './Pokemon';
import data from './data';

export class Pokedex extends Component {
  render() {
    return (
      <div className="pokedex-container">
        {data.map((pokemon,index) => {
          return <Pokemon pokemon={pokemon} key={pokemon.id}/>
        })}  
      </div>
    );
  }
}

export default Pokedex;