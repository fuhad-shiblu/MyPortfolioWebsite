import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import LayoutOne from './assets/Layout/LayoutOne'
import Home from './assets/Pages/Home'
import About from './assets/Pages/About'
import Services from './assets/Pages/Services'
import Portfolios from './assets/Pages/Portfolios'
import Blogs from './assets/Pages/Blogs'
import Contact from './assets/Pages/Contact'
import Error404 from './assets/Pages/Error404'
import Skills from './assets/Pages/Skills'

function App() {
  const myRoute = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='*' element={<Error404/>}/>
        <Route path='/' element={<LayoutOne/>}>
          <Route index element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/portfolios' element={<Portfolios/>}/>
          <Route path='/skills' element={<Skills/>}/>
          <Route path='/blogs' element={<Blogs/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Route>
      </Route>
    )
  )

  return (
    <>
    <RouterProvider router={myRoute}/>
    </>
  )
}

export default App
