import { lazy } from 'react'
import { Routes, Route,  } from 'react-router-dom'
import { Suspense } from '../utils'
const Users = lazy(() => import ('../components/users/Users'))
const Home = lazy(() => import("./home/Home"))
const Layout = lazy(() => import("./layout/Layout"))
const NotFound = lazy(() => import("./not-found/NotFound"))
const ProductDetail = lazy(() => import("./product-detail/ProductDetail"))

const MainRouters = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Suspense><Layout/></Suspense>}>
          <Route path='/' element={<Suspense><Home/></Suspense>}/>
          <Route path='/:id' element={<Suspense><ProductDetail/></Suspense>}/>
          <Route path='/users' element={<Suspense><Users/></Suspense>}/>
          <Route path='*' element={<Suspense><NotFound/></Suspense>}/>
        </Route>
      </Routes>
    </>
  )
}

export default MainRouters 