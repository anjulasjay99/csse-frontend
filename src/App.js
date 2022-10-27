import Sidebar from "./Components/Sidebar";
import AddProduct from "./Product Management/AddProduct";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddSupplier from "./SupplierManagement/AddSupplier";

function App() {
  return (
    <div>
       <BrowserRouter>
        <Routes>
          <Route path="/sidebar" element={<Sidebar />} exact />

          <Route path="/addsupplier" element={<AddSupplier />} exact />

          <Route path="/addProduct" element={<AddProduct />} exact />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
