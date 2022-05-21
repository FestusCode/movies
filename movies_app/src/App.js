import './App.css';
  import Home from './Components/Home';
  import Banner from './Components/Banner'
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/banner" element={<Banner/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
