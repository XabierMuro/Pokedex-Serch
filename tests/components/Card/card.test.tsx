import { render, screen } from '@testing-library/react';
import { Card } from '../../../src/components/card/card';
import { PokemonData } from '../../../src/models/pokemon';
import '@testing-library/jest-dom';
import React from 'react'

const mockPokemon: PokemonData = {
    name: 'bulbasaur',
    id: 1,
    weight: 6.9,
    height: 0.7,
    sprites: 'bulbasaur.png',
    stats: {
      hp: 45,
      atk: 49,
      def: 50,
      sat: 65,
      sdf: 66,
      spd: 47,
    },
    types: ['grass', 'poison'],
  };

  describe('Card Component', () => {
    it('should render the name and identification of the Pokémon', () => {
      render(<Card pokemon={mockPokemon} />);
      expect(screen.getByText('bulbasaur')).toBeInTheDocument();
      expect(screen.getByText('#1')).toBeInTheDocument();
    });
  
    it('should display the image of the Pokémon', () => {
      render(<Card pokemon={mockPokemon} />);
      const pokemonImage = screen.getByAltText('bulbasaur image');
      expect(pokemonImage).toBeInTheDocument();
      expect(pokemonImage).toHaveAttribute('src', 'bulbasaur.png');
    });
  
    it('should show the types of the Pokémon with icons', () => {
      render(<Card pokemon={mockPokemon} />);
      
      mockPokemon.types.forEach(type => {
        expect(screen.getByText(type)).toBeInTheDocument();
        expect(screen.getByAltText(`${type} icon`)).toBeInTheDocument();
      });
    });
  
    it('should display the weight and height of the Pokémon', () => {
      render(<Card pokemon={mockPokemon} />);

      expect(screen.getByText('6.9 kg')).toBeInTheDocument();
      expect(screen.getByText('0.7 m')).toBeInTheDocument();
    });
  
    it('should display the Pokémons statistics', () => {
      render(<Card pokemon={mockPokemon} />);

      expect(screen.getByText('HP')).toBeInTheDocument();
      expect(screen.getByText('45')).toBeInTheDocument();
      expect(screen.getByText('ATK')).toBeInTheDocument();
      expect(screen.getByText('49')).toBeInTheDocument();
      expect(screen.getByText('DEF')).toBeInTheDocument();
      expect(screen.getByText('50')).toBeInTheDocument();
      expect(screen.getByText('SAT')).toBeInTheDocument();
      expect(screen.getByText('65')).toBeInTheDocument();
      expect(screen.getByText('SDF')).toBeInTheDocument();
      expect(screen.getByText('66')).toBeInTheDocument();
      expect(screen.getByText('SPD')).toBeInTheDocument();
      expect(screen.getByText('47')).toBeInTheDocument();
    });
  
    it('should render the progress bar values correctly', () => {
      render(<Card pokemon={mockPokemon} />);
      const progressBars = screen.getAllByRole('progressbar');
      expect(progressBars).toHaveLength(6);
  
      const [hpBar, atkBar, defBar, satBar, sdfBar, spdBar] = progressBars;
  
      expect(hpBar).toHaveAttribute('value', '45');
      expect(hpBar).toHaveAttribute('max', '255');
      expect(atkBar).toHaveAttribute('value', '49');
      expect(defBar).toHaveAttribute('value', '50');
      expect(satBar).toHaveAttribute('value', '65');
      expect(sdfBar).toHaveAttribute('value', '66');
      expect(spdBar).toHaveAttribute('value', '47');
    });
  });
  
  
