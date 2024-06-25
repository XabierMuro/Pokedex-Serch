import './index.css'
import { Header } from './application/components/header/header'
import { DropdownGenerations } from './application/components/dropdownGenerations/dropdownGenerations'
import { SearchBar } from './application/components/searchBar/searchBar'
import { Footer } from './application/components/footer/footer'
import { getPokemon } from './application/getPokemonService'
import { useState, useEffect } from 'react'
import { PokemonList } from './application/components/pokemonList/pokemonList'
import { PokemonData } from './domain/pokemon'

function App() {
  const [pokemons, setPokemons] = useState<PokemonData[] | undefined>(undefined)
  const [search, setSearch] = useState<string>('')
  const [generation, setGenerations] = useState<string>('Kanto')
  const [errorApi, setErrorApi] = useState<boolean>(false)

  useEffect(() => {
    onLoad()
  }, [generation])

  const onLoad = async () => {
    try {
      const result = await getPokemon(generation)
      setPokemons(result)
    } catch (error) {
      setErrorApi(true)
    }
  }

  const handleChange = (query: string) => {
    setSearch(query)
  }

  const handleChangeGeneration = (generation: string) => {
    setGenerations(generation)
  }

  return (
    <div className="container">
      <Header />
      <DropdownGenerations onChange={handleChangeGeneration} />
      <SearchBar onChange={handleChange} />
      <PokemonList error={errorApi} pokemons={pokemons} search={search} />
      <Footer />
    </div>
  )
}

export default App
