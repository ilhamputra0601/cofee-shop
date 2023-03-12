import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import './App.css'
const App = () => {
    return ( 
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Main/>}>
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    );
}
export default App;