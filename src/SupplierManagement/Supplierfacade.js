import axios from "axios";

//seperate conntion to backend of addnew supplier
function addNewSupplier(addsupplier, newSupplier) {
  console.log(newSupplier);
  return axios.post(addsupplier, newSupplier);
}

function viewSupplier(url) {
  return axios.get(url);
}
function viewAllSuppliers(url) {
  return axios.get(url);
}
export { addNewSupplier, viewSupplier, viewAllSuppliers };
