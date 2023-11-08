import Header from "./components/Header/Header";
import Card from "./components/card/Card";
import Moviesadd from "./components/Moviesadd/Moviesadd";
import Detailpage from "./components/Detail/Detailpage";
import { Route, Routes } from 'react-router-dom';




function App() {
  return (
    <div className="App relative">
      <Header />
      <Routes>
        <Route path="/" element={<Card />}></Route>
        <Route path="/addmovie" element={<Moviesadd />}></Route>
        <Route path="/detail/:id" element={<Detailpage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
