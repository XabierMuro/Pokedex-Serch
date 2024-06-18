import {render, screen} from '@testing-library/react'
import {Header} from '../src/components/header/header'
import {Footer} from '../src/components/footer/footer'
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