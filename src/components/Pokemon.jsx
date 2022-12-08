import { useAxios } from '../hook/useAxios';
import { useParams } from 'react-router-dom';

export const Pokemon = () => {
  const { id } = useParams();
  const url = 'https://pokeapi.co/api/v2/pokemon/' + id;
  const { data, loading, error } = useAxios(url);

  const { name, height, weight, sprites } = data;
  console.log(url);
  console.log(data);

  return (
    <div className="single-pokemon'">
      {loading && <div>Is loading</div>}
      {error && <div>{error}</div>}
      <ul>
        <li>Name:{name}</li>
        <li>Height:{height}</li>
        <li>Weight:{weight}</li>
        <li>
          <img src={sprites?.other.dream_world.front_default} alt='' />
        </li>
      </ul>
    </div>
  );
};
