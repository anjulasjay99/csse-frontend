import axios from 'axios'


//seperate conntion to backend of addnew supplier
function addNewSupplier(addsupplier,newSupplier) {
    console.log(newSupplier)
    return axios.post(addsupplier,newSupplier)
}

export  {addNewSupplier}