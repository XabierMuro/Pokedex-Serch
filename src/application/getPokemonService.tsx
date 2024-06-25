import { LocalStoragePokemonRepository } from '../infrastructure/localStoragePokemonRepository.tsx';
import { AxiosPokemonRepository } from '../infrastructure/axiosPokemonRepository';
import { PokemonData } from '../domain/pokemon';

export async function getPokemon(): Promise<PokemonData[]> {
    const localRepo = new LocalStoragePokemonRepository();
    const axiosRepo = new AxiosPokemonRepository();

    const localData = await localRepo.getPokemon();
    if (localData.length > 0) {
        return localData;
    }

    const apiData = await axiosRepo.getPokemon();
    return apiData;
}
