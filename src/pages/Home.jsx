import React from 'react';
import { useAxios } from '../hook/useAxios';
import { Link } from 'react-router-dom';

import { useEffect, useState } from 'react';

export const Home = () => {
  const [load, setLoad] = useState('https://pokeapi.co/api/v2/pokemon/');

  const { data: pokemons, loading, error } = useAxios(load);

  const newData = pokemons?.results;

  console.log(pokemons);

  const getAllPokemons = async () => {
    setLoad(pokemons?.next);
  };
  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <div className='App'>
      <h1>Choose your Pokemon and get info about it! </h1>
      {loading && <div>Loading ..</div>}
      {error && <div>{error}</div>}
      {
        <div>
          <ul>
            {newData &&
              newData.map((pokemon) => (
                <li key={pokemon.name}>
                  <Link to={`/${pokemon.name}`} key={pokemon.name}>
                    {pokemon.name}
                  </Link>
                </li>
              ))}
          </ul>
          <button className='load-more' onClick={() => getAllPokemons()}>
            Load more
          </button>
        </div>
      }
    </div>
  );
};
