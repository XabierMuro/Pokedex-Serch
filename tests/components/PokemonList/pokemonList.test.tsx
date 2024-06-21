import { render, screen } from '@testing-library/react';
import { PokemonList } from '../../../src/components/pokemonList/pokemonList';
import { PokemonData } from '../../../src/models/pokemon';
import '@testing-library/jest-dom';
import React from 'react'

const mockPokemons: PokemonData[] = [
    {
      name: 'bulbasaur',
      id: 1,
      weight: 6.9,
      height: 0.7,
      sprites: 'bulbasaur.png',
      stats: {
        hp: 45,
        atk: 49,
        def: 49,
        sat: 65,
        sdf: 65,
        spd: 45,
      },
      types: ['grass', 'poison'],
    },
    {
      name: 'ivysaur',
      id: 2,
      weight: 13.0,
      height: 1.0,
      sprites: 'ivysaur.png',
      stats: {
        hp: 60,
        atk: 62,
        def: 63,
        sat: 80,
        sdf: 80,
        spd: 60,
      },
      types: ['grass', 'poison'],
    },
  ];
  

  describe('PokemonList Component', () => {
    it('should display the ErrorApi component when an error occurs', () => {
      render(<PokemonList error={true} pokemons={undefined} search="" />);
      expect(screen.getByText('An error occurred getting Pokémons. Please, try it later')).toBeInTheDocument();
    });
  
    it('should show LoadingCard when pokémon data is undefined', () => {
      render(<PokemonList error={false} pokemons={undefined} search="" />);
      const loadingCards = screen.getAllByAltText('Pokeball Icon');
      expect(loadingCards.length).toBe(151);
    });
  
    it('should display the NotFound message when no pokémon are found', () => {
      render(<PokemonList error={false} pokemons={mockPokemons} search="xyz" />);
      expect(screen.getByText('There is no results for "xyz"')).toBeInTheDocument();
    });
  
    it('should display the list of Pokémon when the data is available', () => {
      render(<PokemonList error={false} pokemons={mockPokemons} search="" />);
      expect(screen.getByText('bulbasaur')).toBeInTheDocument();
      expect(screen.getByText('ivysaur')).toBeInTheDocument();
    });
  
    it('you should filter the list of Pokémon according to your search', () => {
      render(<PokemonList error={false} pokemons={mockPokemons} search="ivysaur" />);
      expect(screen.getByText('ivysaur')).toBeInTheDocument();
      expect(screen.queryByText('bulbasaur')).toBeNull();
    });
  });
  