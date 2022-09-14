import { useState, useEffect } from 'react';
import axios from 'axios';

const useAxios = ({input_code}) => {
    const [token,setToken] = useState(null);
    const [res,setRes] = useState(null);
    const [stderr,setStderr] = useState(null);


    const options_post = {
        method: 'POST',
        url: 'https://judge0-ce.p.rapidapi.com/submissions',
        params: {base64_encoded: 'false', fields: '*'},
        headers: {
          'content-type': 'application/json',
          'x-rapidapi-host': 'judge0-ce.p.rapidapi.com',
          'x-rapidapi-key': '1c82d7307emsh4e551669566c627p10a483jsn082f1fb5a1d0'
        },
        data: JSON.stringify({
          language_id: 71,
          source_code: input_code,
          stdin: 'null'
        })
      };

      const options_get = {
        method: 'GET',
        url: `https://judge0-ce.p.rapidapi.com/submissions/${token}`,
        params: {base64_encoded: 'true', fields: '*'},
        headers: {
          'x-rapidapi-host': 'judge0-ce.p.rapidapi.com',
          'x-rapidapi-key': '1c82d7307emsh4e551669566c627p10a483jsn082f1fb5a1d0'
        }
      };

      // const postData = () => {
      //   axios.request(options_post).then(function (response) {
      //       setToken(response.data.token);
      //   }).catch(function (error) {
      //       console.error(error);
      //   });
      // }

      const fetchData = () => {
        axios.request(options_post).then(function (response) {
          setToken(response.data.token);
      }).catch(function (error) {
          console.error(error);
      });

    };

      useEffect(()=> {
        fetchData();
      },[input_code])

      useEffect(() => {
        // GET request using axios inside useEffect React hook
        axios.request(options_get).then(function (response) {
            // console.log(response.data);
            // console.log(atob(response.data.stdout));
            const resp = atob(response.data.stdout)
            setRes(resp);
            
        }).catch(function (error) {
            // console.error(error);
            setStderr(error)
        });
    }, [token]);

  return { res, stderr };
}
 
export default useAxios;