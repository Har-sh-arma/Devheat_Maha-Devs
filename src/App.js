import { BrowserRouter, Route, Routes } from "react-router-dom";
import Lspage from './components/Login_Signup/Lspage';
import Spage from './components/Login_Signup/Spage';
import Main from './components/Mainpg/Main'
// import Maps from "./components/Location/Maps";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Lspage />} />
          <Route path="/Lspage" element={<Lspage />} />
          <Route path='/Spage' element={<Spage />} />
          <Route path='/Main' element={<Main />} />
          {/* <Route path="/Maps" element={<Maps />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;