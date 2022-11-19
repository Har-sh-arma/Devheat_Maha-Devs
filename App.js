import { BrowserRouter, Route, Routes } from "react-router-dom";
import Lspage from './components/Login_Signup/Lspage';
import Spage from './components/Login_Signup/Spage';
import Main from './components/Mainpg/Main'
import Otp from "./components/Login_Signup/Otp";
import MapsMain from "./components/Location/MapsMain";
import Description from "./components/Mainpg/Description";
import Details from "./components/Cropdetails/Details";

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
          <Route path="/Otp" element={<Otp />} />
          <Route path="/MapsMain" element={<MapsMain />} />
          <Route path='/Description' element={<Description />} />
          <Route path='/Details' element={<Details />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;