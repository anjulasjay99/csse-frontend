import Sidebar from "./Components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
       <BrowserRouter>
        <Routes>
          <Route path="/sidebar" element={<Sidebar />} exact />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
