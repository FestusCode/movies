import './App.css';
  import Home from './Components/Home';
  import Banner from './Components/Banner'
import { HashRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
      <HashRouter>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/banner" element={<Banner/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
