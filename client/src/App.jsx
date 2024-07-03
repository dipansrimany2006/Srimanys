import  Header  from './Header.jsx';
import Home from './Home/Home.jsx';
import './scss/App.scss'
import Categorypage from './Category/Categorypage.jsx';
import SingleProduct from './SingleProduct.jsx';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

  return (
    <>
    <Header/>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/category/:id' element={<Categorypage/>}/>
      <Route path='/product/:id' element={<SingleProduct/>}/>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
