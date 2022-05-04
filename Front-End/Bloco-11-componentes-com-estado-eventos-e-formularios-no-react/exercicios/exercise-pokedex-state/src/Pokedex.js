import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    render() {
        let { pokemons } = this.props;
        return (
            <div className="pokedex">
                {
                    pokemons.filter(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)
                }
            </div>
        );
    }
}

export default Pokedex;