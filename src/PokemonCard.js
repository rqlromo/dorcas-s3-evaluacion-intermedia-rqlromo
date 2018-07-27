import React, { Component } from 'react';
import './PokemonCard.css';

class PokemonCard extends Component {

  render() {

    return (
      <div className = "CardPokemon" >
        <img src={this.props.url} alt=""/>
        <div className = "NamePokemon" >
            {this.props.name}
        </div>

        <div className = "TypesPokemon" >
            <div className = "TypePokemon">
                {this.props.types[0]}
            </div>
            <div className = "TypePokemon">
                {this.props.types[1]}
            </div>
        </div>
      </div>
    );
  }
}

export default PokemonCard;