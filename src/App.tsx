import './index.css'
import { Header } from './components/header/header'
import { SearchBar } from './components/searchBar/searchBar'
import { Footer } from './components/footer/footer'
import { fetchPokemons } from './infrastructure/pokemonRepository'
import { useState, useEffect } from 'react'
import { PokemonList } from './components/pokemonList/pokemonList'
import { PokemonData } from './models/pokemon'

function App() {
  const [pokemons, setPokemons] = useState<PokemonData[]|undefined>(undefined)
  const [search, setSearch] = useState<string>('')
  const [errorApi, setErrorApi] = useState<boolean>(false)

  useEffect(() => {
    onLoad()
  }, [])

  const onLoad = async () => {
    try {
      const result = await fetchPokemons()
        setPokemons(result)
    } catch (error) {
      setErrorApi(true)
    }
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
