import './index.css'
import { Header } from './components/header/header'
import { SearchBar } from './components/searchBar/searchBar'
import { Footer } from './components/footer/footer'
import { fetchPokemon } from './infrastructure/repositories/pokemon.repository'
import { useState, useEffect } from 'react'
import { PokemonList } from './components/pokemonList/pokemonList'
import { PokemonData } from './domain/models/pokemon'

function App() {
  const [pokemons, setPokemons] = useState<PokemonData[]>([])
  const [search, setSearch] = useState<string>('')
  const [errorApi, setErrorApi] = useState<boolean>(false)

  useEffect(() => {
    onLoad()
  }, [])

  const onLoad = async () => {
    const result = await fetchPokemon()
    if (result !== false) {
      setPokemons(result)
      return
    }
    setErrorApi(true)
  }

  const handleChange = (query: string) => {
    setSearch(query)
  }

  return (
    <div className="container">
      <Header />
      <SearchBar onChange={handleChange} />
      <PokemonList error={errorApi} pokemons={pokemons} search={search} />
      <Footer />
    </div>
  )
}

export default App
