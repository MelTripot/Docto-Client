import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Login from "./pages/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
