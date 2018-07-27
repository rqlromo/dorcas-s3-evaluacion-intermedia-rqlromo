import React, { Component } from 'react';
import PokemonCard from './PokemonCard';
import './PokemonList.css';

class PokemonList extends Component {

  render() {
    console.log(this.props.arrayPokemons);
    return (
      <div className="Wrapper">
      <ul className="item-list">
      { this.props.arrayPokemons.map(function(pokemon,index){
        return (
            <li key={index}>
            <PokemonCard
            id = {pokemon.id}
            name = {pokemon.name}
            types = {pokemon.types}
            evolution = {pokemon.evolution}
            url = {pokemon.url}
        />
        </li>
        );
    }) }
    </ul>
      </div>
    );
  }
}

export default PokemonList;