import { AxiosPokemonRepository } from '../infrastructure/axiosPokemonRepository'
export async function getPokemon(){
    const axiosPokemonRepository = new AxiosPokemonRepository
    return await axiosPokemonRepository.getPokemon()
}