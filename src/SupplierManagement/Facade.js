import React from 'react'
import axios from 'axios'


// export const useFacadeUserAPI = () =>{

//    function get(url) {
//     return axios.get(url)
//   }

//   function post(url, options) {
//     return axios.post(url, options)
//   }

//   return{
//     get,
//     post
//   }
// }

// const postData = (url,option) =>{
//     return axios.post(url, option)
// }

function postData(url,newSupplier) {
   
    
    console.log(newSupplier)
    return axios.post(url,newSupplier)
    // axios.post(url, newSupplier).then((res)=>{
    //     console.log(res.data);
    //     alert("Added Succesfully");
    // }).catch((err) =>{
    //     console.log(err);
    // })
}

export  {postData}