import './App.css'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import "primereact/resources/themes/saga-blue/theme.css"
import "primereact/resources/primereact.min.css"
import "primeicons/primeicons.css"
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import DetailsBlogs from './Pages/Blogs/detailsBlogs'
import HomePage from './Pages/Home/HomePage'
import AboutPage from './Pages/ABout/AboutPage.jsx'
import Contact from './Pages/Contact.jsx'
import AllUserPage from './Pages/Admin/AllUserPage.jsx'
import AddBlogPage from './Pages/Admin/AddBlogPage.jsx'
import Services from './Pages/Services.jsx'
import Blogs from './Pages/Blogs/blogs.jsx'
function App() {

  return (
    <div className='100%'>
    <BrowserRouter>
    <Header/>
    <div style={{minHeight:'78vh'}}>
    <Routes>
    <Route path='/' element={<HomePage/>} />
    <Route path='/DetailsBlogs' element={<DetailsBlogs/>} />
    <Route path='/About' element={<AboutPage/>} />
    <Route path='/Contact' element={<Contact/>} />
    <Route path='/Services' element={<Services/>} />
    <Route path='/Blogs' element={<Blogs/>} />
    <Route path='/admin' element={<Outlet/>} >
    <Route path='' element={<AllUserPage/>} />
    <Route path='addblog' element={<AddBlogPage/>} />
    </Route>

    </Routes>
    </div>
    <Footer/>
    </BrowserRouter>
    </div>
  )
}

export default App
