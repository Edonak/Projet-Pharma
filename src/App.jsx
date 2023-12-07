import{BrowserRouter, Routes,Route} from 'react-router-dom'
import NavBar from './component/NavBar'
import Home from './pages/Home'
import Login from './pages/Login'
import About from './pages/About'
import Products from './pages/Products'
import ProductList from './pages/ProductList'
import SingleProduct from './pages/SingleProduct'
import Layout from './pages/Layout'



function App() {
  

  return (
   <BrowserRouter>
   <NavBar />
   <Routes>

    <Route path='/' element={<Login/>}/>

    <Route path='/' element={<Layout/>}/>
    <Route path='/home' element={<Home />}/>
    <Route/>

    <Route path='/about' element={<About/>} />
    <Route path='/products' element={<Products />} /> 
     <Route index element={<ProductList />} />
    <Route path='id' element={<SingleProduct/>} />
    <Route/>

   </Routes>
   </BrowserRouter>
  )
}

export default App
