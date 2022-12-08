import { useAxios } from '../hook/useAxios';
import { useParams } from 'react-router-dom';

export const Pokemon = () => {
  const { index } = useParams();
  const url = 'https://pokeapi.co/api/v2/pokemon/' + index;
  const { data, loading, error } = useAxios(url);

  const { id, name, height, weight, sprites } = data;
  console.log(url);
  console.log(data);

  return (
    <div className='pokemon'>
      {loading && <div>Is loading</div>}
      {error && <div>{error}</div>}
      <ul>
        <li>#{id}</li>
        <li>
          <img src={sprites?.other.dream_world.front_default} alt='' />
        </li>
        <li>Name:{name}</li>
        <li>Height:{height}</li>
        <li>Weight:{weight}</li>
      </ul>
    </div>
  );
};
