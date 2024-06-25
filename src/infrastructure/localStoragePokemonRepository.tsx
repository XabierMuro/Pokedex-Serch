import { PokemonData } from '../domain/pokemon'
import { PokemonRepository } from '../domain/pokemonRepository'

interface StorageEntry {
  data: any
  timestamp: number
}

const STORAGE_TTL = 1000 * 60 * 60

export function setLocalStorage(key: string, data: any) {
  const entry: StorageEntry = { data, timestamp: Date.now() }
  localStorage.setItem(key, JSON.stringify(entry))
}

export function getLocalStorage(key: string) {
  const item = localStorage.getItem(key)
  if (item) {
    const entry: StorageEntry = JSON.parse(item)
    if (Date.now() - entry.timestamp < STORAGE_TTL) {
      return entry.data
    } else {
      localStorage.removeItem(key)
    }
  }
  return null
}

export class LocalStoragePokemonRepository implements PokemonRepository {
  async getPokemon(key: string): Promise<PokemonData[]> {
    const cachedData = getLocalStorage(key)
    if (cachedData) {
      console.log('Using local storage data')
      return cachedData
    } else {
      console.log('No data in local storage')
      return []
    }
  }
}
