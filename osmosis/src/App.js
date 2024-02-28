import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Insulin from './Insulin';
import '../src/tailwind.css'

function App() {
  return (
    <div className="">
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Insulin />} />
      </Routes>
    </BrowserRouter>
      
     
    </div>
  );
}

export default App;
