import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router-dom";
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Playlists from './components/Playlists/Playlists';
import History from './components/History/History';

function App() {
  return (
  <div>
      <div className="App">
        <Header />
        <Navbar />
       </div>
       <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Playlists" element={<Playlists/> } />
          <Route path="/History" element={<History />} />
       </Routes>
  </div>
  

  );
}

export default App;
