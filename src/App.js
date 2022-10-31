import Sidebar from "./Components/Sidebar";
import AddProduct from "./Product Management/AddProduct";
import ViewProducts from "./Product Management/ViewProducts";
import Offline from "./Components/Offline";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
       <BrowserRouter>
        <Routes>
          <Route path="/sidebar" element={<Sidebar />} exact />
          <Route path="/addProduct" element={<AddProduct />} exact />
          <Route path="/viewProducts" element={<ViewProducts />} exact />
          <Route path="/offline" element={<Offline />} exact />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
