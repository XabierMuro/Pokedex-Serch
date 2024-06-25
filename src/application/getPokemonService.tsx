import { LocalStoragePokemonRepository } from '../infrastructure/localStoragePokemonRepository.tsx'
import { AxiosPokemonRepository } from '../infrastructure/axiosPokemonRepository'
import { PokemonData } from '../domain/pokemon'

export async function getPokemon(generation: string): Promise<PokemonData[]> {
  const localRepo = new LocalStoragePokemonRepository()
  const axiosRepo = new AxiosPokemonRepository()

  const STORAGE_KEYS = [
    'Kanto',
    'Johto',
    'Hoenn',
    'Sinnoh',
    'Unova',
    'Kalos',
    'Alola',
    'Galar',
    'Paldea',
  ]
  const key = STORAGE_KEYS.find(key => key === generation)
  const localData = await localRepo.getPokemon(key as string)
  if (localData.length > 0) {
    return localData
  }

  const apiData = await axiosRepo.getPokemon(generation, key as string)
  return apiData
}
