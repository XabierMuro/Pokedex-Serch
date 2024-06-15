export type Pokemon = {
  name: string
  url: string
}

export type PokemonType =
  | 'grass'
  | 'bug'
  | 'electric'
  | 'ground'
  | 'fighting'
  | 'fire'
  | 'water'
  | 'poison'
  | 'flying'
  | 'psychic'
  | 'fairy'
  | 'dragon'
  | 'ghost'
  | 'ice'
  | 'normal'
  | 'rock'
  | 'steel'
  | 'dark'

export type PokemonData = {
  name: string
  id: number
  weight: number
  height: number
  sprites: string
  stats: Stats
  types: PokemonType[]
}

export type Stats = {
  hp: number
  atk: number
  def: number
  sat: number
  sdf: number
  spd: number
}
