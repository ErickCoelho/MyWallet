import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import TokenContext from "./context/TokenContext";
import UserContext from "./context/UserContext";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Register from "./components/Register/Register";
import Home from "./components/Home/Home";

function App() {
  const [user, setUser] = useState(localStorage.getItem('user') || null);
  const [token, setToken] = useState(localStorage.getItem('token') || "");


  return (
    <UserContext.Provider value={{ user, setUser }}>
      <TokenContext.Provider value={{ token, setToken }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/cadastro" element={<Signup />}></Route>
            <Route path="/entrada" element={<Register entryType="Income" />}></Route>
            <Route path="/saida" element={<Register entryType="Expense" />}></Route>
            <Route path="/home" element={<Home />}></Route>
          </Routes>
        </BrowserRouter>
      </TokenContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
