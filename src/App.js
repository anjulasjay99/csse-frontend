import Sidebar from "./Components/Sidebar";
import AddProduct from "./Product Management/AddProduct";
import ViewProducts from "./Product Management/ViewProducts";
import Offline from "./Components/Offline";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddSupplier from "./SupplierManagement/AddSupplier";
import UpdateSupplier from "./SupplierManagement/UpdateSupplier";
import ViewSuppliers from "./SupplierManagement/ViewSuppliers";

function App() {
  return (
    <div>
       <BrowserRouter>
        <Routes>
          <Route path="/sidebar" element={<Sidebar />} exact />

          <Route path="/addsupplier" element={<AddSupplier />} exact />

          <Route path="/addProduct" element={<AddProduct />} exact />
          <Route path="/viewProducts" element={<ViewProducts />} exact />
          <Route path="/offline" element={<Offline />} exact />
          <Route path="/ViewSuppliers" element={<ViewSuppliers />} exact />
          <Route path="/updateSupplier/:id" element={<UpdateSupplier />} exact />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
