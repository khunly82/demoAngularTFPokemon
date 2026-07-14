import { httpResource } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  pokemonName = signal('Pikachu')
  pokemon = httpResource<Pokemon>(() => 'https://pokeapi.co/api/v2/pokemon/' + this.pokemonName())
}
