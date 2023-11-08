import Header from "./components/Header/Header";
import Card from "./components/card/Card";
import Moviesadd from "./components/Moviesadd/Moviesadd";
import { Route, Routes } from 'react-router-dom';




function App() {
  return (
    <div className="App relative">
      <Header />
      <Routes>
        <Route path="/" element={<Card />}></Route>
        <Route path="/addmovie" element={<Moviesadd />}></Route>
      </Routes>
    </div>
  );
}

export default App;
