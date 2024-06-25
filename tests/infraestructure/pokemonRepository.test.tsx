import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { AxiosPokemonRepository } from '../../src/infrastructure/axiosPokemonRepository';


const mock = new MockAdapter(axios);

beforeEach(() => {
  mock.reset();
});

afterEach(() => {
  mock.resetHandlers();
});

describe('getPokemons', () => {
    it('should get and transform pokemon list correctly', async () => {
      mock.onGet('https://pokeapi.co/api/v2/pokemon?limit=151').reply(200, {
        results: [
          { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
          { name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' }
        ]
      });
  
      mock.onGet('https://pokeapi.co/api/v2/pokemon/1/').reply(200, {
        id: 1,
        name: 'bulbasaur',
        weight: 69,
        height: 7,
        sprites: { other: { 'official-artwork': { front_default: 'bulbasaur.png' } } },
        stats: [
          { base_stat: 45, stat: { name: 'hp' } },
          { base_stat: 49, stat: { name: 'attack' } },
          { base_stat: 49, stat: { name: 'defense' } },
          { base_stat: 65, stat: { name: 'special-attack' } },
          { base_stat: 65, stat: { name: 'special-defense' } },
          { base_stat: 45, stat: { name: 'speed' } }
        ],
        types: [
          { type: { name: 'grass' } },
          { type: { name: 'poison' } }
        ]
      });
  
      mock.onGet('https://pokeapi.co/api/v2/pokemon/2/').reply(200, {
        id: 2,
        name: 'ivysaur',
        weight: 130,
        height: 10,
        sprites: { other: { 'official-artwork': { front_default: 'ivysaur.png' } } },
        stats: [
          { base_stat: 60, stat: { name: 'hp' } },
          { base_stat: 62, stat: { name: 'attack' } },
          { base_stat: 63, stat: { name: 'defense' } },
          { base_stat: 80, stat: { name: 'special-attack' } },
          { base_stat: 80, stat: { name: 'special-defense' } },
          { base_stat: 60, stat: { name: 'speed' } }
        ],
        types: [
          { type: { name: 'grass' } },
          { type: { name: 'poison' } }
        ]
      });
  
      const repository = new AxiosPokemonRepository();
      const pokemons = await repository.getPokemon();
    
      expect(pokemons).toEqual([
        {
          name: 'bulbasaur',
          id: 1,
          weight: 6.9,
          height: 0.7,
          sprites: 'bulbasaur.png',
          stats: {
            hp: 45,
            atk: 49,
            def: 49,
            sat: 65,
            sdf: 65,
            spd: 45
          },
          types: ['grass', 'poison']
        },
        {
          name: 'ivysaur',
          id: 2,
          weight: 13.0,
          height: 1.0,
          sprites: 'ivysaur.png',
          stats: {
            hp: 60,
            atk: 62,
            def: 63,
            sat: 80,
            sdf: 80,
            spd: 60
          },
          types: ['grass', 'poison']
        }
      ]);
    });
  
    it('should handle errors in obtaining pokémon data', async () => {
      
      mock.onGet('https://pokeapi.co/api/v2/pokemon?limit=151').reply(200, {
        results: [
          { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' }
        ]
      });
  
      mock.onGet('https://pokeapi.co/api/v2/pokemon/1/').reply(500);
  
      const repository = new AxiosPokemonRepository();
      await expect(repository.getPokemon()).rejects.toThrow();
    });
  });
  