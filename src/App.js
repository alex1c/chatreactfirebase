import "./App.css";
import Navbar from "./components/Navbar";

import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <AppRouter></AppRouter>
    </BrowserRouter>
  );
}

export default App;
