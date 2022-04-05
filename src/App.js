import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header2 from './components/Header2/Header2';
import Home from './components/Pages/Home/Home';
import './index.css';

function App() {
  return (
   <>
      <BrowserRouter>
        <Header2></Header2>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/*' element={<Home />} >
            </Route>
        </Routes>
      </BrowserRouter>
   </>
      
  );
}

export default App;
