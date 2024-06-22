import {render, screen} from '@testing-library/react'
import {Header} from '../src/components/header/header'
import {Footer} from '../src/components/footer/footer'
import {SearchBar} from '../src/components/searchBar/searchBar'
import App from '../src/App'
import React from 'react'
import {AxiosPokemonRepository} from '../src/infrastructure/axiosPokemonRepository'
import { vi } from 'vitest'
import '@testing-library/jest-dom';

describe('Header',() =>{
    it('renders appropiately',() => {
      render(<Header/>)
      expect(screen.getByText('Pokédex')).toBeInTheDocument()
    })
  });

describe('Footer',() =>{
    it('renders appropiately',() => {
      render(<Footer/>)
      expect(screen.getByText('©2024 Pokémon. ©1995 - 2024 Nintendo/Creatures Inc./GAME FREAK inc. TM, ®Nintendo.')).toBeInTheDocument()
  })
});

const handleChange = (query: string) => {
    return;
  }

describe('Search',() =>{
    it('renders appropiately',() => {
      render(<SearchBar onChange={handleChange}/>)
      expect(screen.getByPlaceholderText('Search a Pokemon...')).toBeInTheDocument()
  })
});

describe('App',() =>{
    it('renders appropiately',async() => {
      vi.spyOn(AxiosPokemonRepository.prototype, 'getPokemon')
            .mockResolvedValue([{
                name: "bulbasaur",
                id: 1,
                weight: 6.9,
                height: 0.7,
                sprites: "",
                stats: {
                    hp: 45,
                    atk: 49,
                    def: 49,
                    sat: 65,
                    sdf: 65,
                    spd: 45,
                },
                types: ["grass", "poison"],
            }]);

        render(<App />);
      expect(await screen.findByText('bulbasaur')).toBeInTheDocument()
  })
  it('renders loading cards',() => {
    render(<App/>)
    expect(screen.getAllByAltText('Pokeball Icon'))
})
it('renders error',() => {
    
    vi.spyOn(AxiosPokemonRepository.prototype, "getPokemon").mockRejectedValue(new Error())
    render(<App/>)
        expect(screen.getAllByAltText('Pokeball Icon'))
    })
});

