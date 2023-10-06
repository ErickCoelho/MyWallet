import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

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
            <Route path="/habitos" element={<Habits />}></Route>
            <Route path="/hoje" element={<Today />}></Route>
            <Route path="/historico" element={<Historic />}></Route>
            {/* <Route path="/sections/:filmId" element={<div />}></Route> */}
          </Routes>
        </BrowserRouter>
      </TokenContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
