import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Pages/Home/Home';
import './index.css';

function App() {
  return (
   <>
      <BrowserRouter>
      <Header></Header>
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
