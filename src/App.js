import Sidebar from "./Components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddSupplier from "./SupplierManagement/AddSupplier";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCol, MDBContainer, MDBIcon, MDBInput, MDBRow, MDBTypography } from 'mdb-react-ui-kit';

function App() {
  return (
    <div>
       <BrowserRouter>
        <Routes>
          <Route path="/sidebar" element={<Sidebar />} exact />
          <Route path="/addsupplier" element={<AddSupplier />} exact />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
