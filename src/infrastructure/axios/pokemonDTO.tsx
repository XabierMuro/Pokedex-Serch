export type PokemonDTO = {
  name: string
  id: number
  weight: number
  height: number
  sprites: SpritesDTO
  stats: StatsDTO[]
  types: TypeDTO[]
}

export type StatsDTO = {
  base_stat: number
}

export type TypeDTO = {
  type: {
    name: string
  }
}

export type SpritesDTO = {
  other: {
    'official-artwork': {
      front_default: string
    }
  }
}
