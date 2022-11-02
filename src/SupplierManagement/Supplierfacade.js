import React from 'react'
import axios from 'axios'



function postData(url,newSupplier) {
    console.log(newSupplier)
    return axios.post(url,newSupplier)
}

export  {postData}