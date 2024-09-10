import './App.css';
import About from './Component/About/About';
import Blog from './Component/Blog/Blog';
import Contact from './Component/Contact/Contact';
import Home from './Component/Home/Home';
import Nav from './Component/Nav/Nav';
import Player from './Component/Player/Player';
import Team from './Component/Team/Team';
import { BrowserRouter, Route , Routes } from 'react-router-dom';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Nav/>
          <Route path="/" element={<Home/>}/>
          <Route path="/morsgaming/" element={<Home/>}/>
          <Route path="/about" element={<About/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/player' element={<Player/>}/>
          <Route path='/team' element={<Team/>}/>
          <Nav/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
