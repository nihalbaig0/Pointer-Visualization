// import React, { useState ,useEffect } from 'react';
// import { Button, Checkbox, Form } from 'semantic-ui-react'
// import axios from 'axios';
// import useAxios from './useAxios';
// export default function Test() {
//     const [input_text,setInputtext] = useState(null);
//     const [input_code, setInputcode] = useState(null);
//     const [lastName, setLastName] = useState('');
//     const [checkbox, setCheckbox] = useState(false);
//     const [result,setResult] = useState([]]);

//     const { res, stderr } = useAxios(input_code);
//     useEffect(() => {
//         if (res !== null) {
//             setResult(res);
//             console.log(result);
//         }
//     }, [res]);

    

        

//     const postData  = () => {
//      setInputcode(input_text);  
     
//     }
    
//     // const options_post = {
//     //     method: 'POST',
//     //     url: 'https://judge0-ce.p.rapidapi.com/submissions',
//     //     params: {base64_encoded: 'false', fields: '*'},
//     //     headers: {
//     //       'content-type': 'application/json',
//     //       'x-rapidapi-host': 'judge0-ce.p.rapidapi.com',
//     //       'x-rapidapi-key': '1c82d7307emsh4e551669566c627p10a483jsn082f1fb5a1d0'
//     //     },
//     //     data: JSON.stringify({
//     //       language_id: 71,
//     //       source_code: input_code,
//     //       stdin: 'null'
//     //     })
//     //   };

//     //   const options_get = {
//     //     method: 'GET',
//     //     url: `https://judge0-ce.p.rapidapi.com/submissions/${token}`,
//     //     params: {base64_encoded: 'true', fields: '*'},
//     //     headers: {
//     //       'x-rapidapi-host': 'judge0-ce.p.rapidapi.com',
//     //       'x-rapidapi-key': '1c82d7307emsh4e551669566c627p10a483jsn082f1fb5a1d0'
//     //     }
//     //   };

//     //   const postData = () => {
//     //     axios.request(options_post).then(function (response) {
//     //         setToken(response.data.token);
//     //     }).catch(function (error) {
//     //         console.error(error);
//     //     });
//     //   }

//     //   useEffect(() => {
//     //     // GET request using axios inside useEffect React hook
//     //     axios.request(options_get).then(function (response) {
//     //         console.log(response.data);
//     //         console.log(atob(response.data.stdout));
//     //     }).catch(function (error) {
//     //         console.error(error);
//     //     });
//     // }, [token]);
      
//     return (
//         <div>
//             <Form className="create-form">
//                 <Form.Field>
//                     <label>Input Code</label>
//                     {/* <textarea placeholder='First Name' onChange={(e) => setFirstName(e.target.value)}/> */}
//                     <textarea
//               required
//               name="solution"
//               id="source"
//               onChange={(e) => setInputtext(e.target.value)}
//               className=" source"
              
//             ></textarea>
//                 </Form.Field>
//                 <Form.Field>
//                     <label>Last Name</label>
//                     <input placeholder='Last Name' onChange={(e) => setLastName(e.target.value)}/>
//                 </Form.Field>
//                 <Form.Field>
//                     <Checkbox label='I agree to the Terms and Conditions' onChange={(e) => setCheckbox(!checkbox)}/>
//                 </Form.Field>
//                 <Button type='submit' onClick={postData}>Submit</Button>
//             </Form>
//         </div>
//     )
// }