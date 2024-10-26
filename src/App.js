
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './pages/home/Home';
import Price from './pages/price/Price';
import Contact from './pages/contact/Contact';
import Header from './comps/header/Header';
import WithContentEditable from './comps/content editable/WithContentEditable';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/pricing' element={<Price/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

// export default App;

export default WithContentEditable(App);
