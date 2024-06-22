import { Card } from '../card/card'
import { NotFound } from '../notFound/notFound'
import { LoadingCard } from '../loadingCard/loadingCard'
import { ErrorApi } from '../errorApi/errorApi'
import { PokemonData } from '../../../domain/pokemon'

type PropsPokemonList = {
  error: boolean
  pokemons: PokemonData[]| undefined
  search: string
}

const emptyArray: number[] = []
for (let i = 0; i < 151; i++) {
  emptyArray.push(i)
}

export function PokemonList(props: PropsPokemonList) {
  const { error, pokemons, search } = props
  
  if (error) {
    return (
      <div className="container">
        <ErrorApi />
      </div>
    )
  }

  if (pokemons === undefined) {
    return (
      <div className="container_pokemon">
        {emptyArray.map(key => (
          <LoadingCard key={key} />
        ))}
      </div>
    )
  }

  const filteredPokemons: PokemonData[] = pokemons.filter(pokemon =>
    pokemon.name.toUpperCase().includes(search.toUpperCase()),
  )

  if (filteredPokemons.length === 0) {
    return <NotFound notFoundMessage={search} />
  }

  return (
    <div className="container_pokemon">
      {filteredPokemons.map((pokemon, key) => (
        <Card key={key} pokemon={pokemon} />
      ))}
    </div>
  )
}
