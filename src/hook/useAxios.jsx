import { useState, useEffect } from 'react';
import axios from 'axios';

// export const useAxios = (url) => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const res = await fetch(url);
//       const json = await res.json();

//       setData(json);
//     };
//     fetchData();
//   }, [url]);

//   return { data };
// };

////////////////////////////////////////////////////

// export const useAxios = (url) => {
//   const [data, setData] = useState([]);

//   const [loading, setIsLoading] = useState(true);

//   const [error, setError] = useState(false);

//   useEffect(() => {
//     fetch(API_URL)
//       .then(async (response) => {
//         const respData = await response.json();
//         setData(respData);
//       })
//       .catch((error) => setError(error))
//       .finally(() => setIsLoading(false));
//   }, []);

//   return [loading, data, error];
// };
/////////////////////////////////////////////////////////////\

// const [loading, setLoading] = useState(false);
// const [data, setData] = useState([]);
// const [error, setError] = useState(null);

//   useEffect(() => {
//     const getData = async () => {
//       try {
//         setLoading(true);
//         setError(null);
//         const response = await fetch(url);
//         setData(response);
//         setLoading(false);
//       } catch (error) {
//         if (axios.isAxiosError(error)) {
//           setError(error.message);
//         } else {
//           setError('Unknown error.');
//         }
//         setLoading(false);
//         setData([]);
//       }
//     };
//     getData();
//   }, [url]);

//   return [loading, data, error];
// };
//////////////////////////////////////////////////////////
export const useAxios = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
        console.log(response);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [url]);
  return { data, loading, error };
};
