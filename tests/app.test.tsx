import {render, screen} from '@testing-library/react'
import {Header} from '../src/components/header/header'
import {Footer} from '../src/components/footer/footer'
import {SearchBar} from '../src/components/searchBar/searchBar'
import React from 'react'

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

