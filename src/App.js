import Header from "./components/Header/Header";
import Card from "./components/card/Card";
import Moviesadd from "./components/Moviesadd/Moviesadd";
import Detailpage from "./components/Detail/Detailpage";
import Loginn from "./components/Login/Loginn";
import Signup from "./components/Login/Signup";
import { createContext, useEffect , useState } from "react";
import { Route, Routes } from 'react-router-dom';


const Appstate = createContext()
function App(){
  const [Login, setlogin] = useState(false)
  const [userName, setuserName ] = useState("")


  return (
    <Appstate.Provider value={{Login, userName, setlogin,  setuserName}}>
      <div className="App relative">
        <Header />
        <Routes>
          <Route path="/" element={<Card />}></Route>
          <Route path="/addmovie" element={<Moviesadd />}></Route>
          <Route path="/detail/:id" element={<Detailpage />}></Route>
          <Route path="/login" element={<Loginn />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </div>
    </Appstate.Provider>
  );
}

export default App;
export {Appstate}
