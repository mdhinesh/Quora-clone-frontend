import { Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import Authcomponents from "./components/authcomponents";
import Signup from "./components/auth/signup";
import Login from "./components/auth/login"

function App() {
  return (
    <div className="App">
      {/* <Authcomponents /> */}
      <Routes>
        {/* <Route path='/' element={<Authcomponents />} /> */}
        <Route path='/' element={<Signup />} />
        <Route path='/userloggedin' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
