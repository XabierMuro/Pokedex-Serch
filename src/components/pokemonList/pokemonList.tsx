import { Card } from '../card/card'
import { NotFound } from '../notFound/notFound'
import { LoadingCard } from '../loadingCard/loadingCard'
import { ErrorApi } from '../errorApi/errorApi'
import { PokemonData } from '../../domain/models/pokemon'

type PropsPokemonList = {
  error: boolean
  pokemons: PokemonData[]
  search: string
}

const emptyArray: number[] = []
for (let i = 0; i < 151; i++) {
  emptyArray.push(i)
}

export function PokemonList(props: PropsPokemonList) {
  const { error, pokemons, search } = props
  const filteredPokemons: PokemonData[] = pokemons.filter(pokemon =>
    pokemon.name.includes(search),
  )

  if (error) {
    return (
      <div className="container">
        <ErrorApi />
      </div>
    )
  }

  if (pokemons.length === 0) {
    return (
      <div className="container_pokemon">
        {emptyArray.map(key => (
          <LoadingCard key={key} />
        ))}
      </div>
    )
  }

  if (filteredPokemons.length === 0) {
    return <NotFound notFoundMessage={search} />
  }

  return (
    <div className="container_pokemon">
      {filteredPokemons?.map((pokemon, key) => (
        <Card key={key} pokemon={pokemon} />
      ))}
    </div>
  )
}
