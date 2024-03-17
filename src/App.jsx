import { Fragment } from 'react'
import Header from './component/nav/Header'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import RecommendedMusic from './pages/recommendedMusic'
import Auth from './pages/auth'
import TrendingMusic from './pages/trendingMusic'
import ProtectedRoute from './component/auth/Protection'

function App() {

  return (
    <Fragment>
      <Header />
      <main className='w-[1600px] m-auto'>
        <BrowserRouter>
          <Routes>
            <Route path="/trending-music" element={<ProtectedRoute><TrendingMusic /></ProtectedRoute>} />
            <Route path="/recommendation-music" element={<ProtectedRoute><RecommendedMusic /></ProtectedRoute>} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
        </BrowserRouter>
      </main>
    </Fragment>

  )
}

export default App
