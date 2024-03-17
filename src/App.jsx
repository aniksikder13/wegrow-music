import { Fragment, useState } from 'react'
import Header from './component/nav/Header'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import RecommendedMusic from './pages/recommendedMusic'
import Auth from './pages/auth'
import TrendingMusic from './pages/trendingMusic'
import ProtectedRoute from './component/auth/Protection'
import Search from './component/nav/Search'

function App() {
  const [search, setSearch]= useState('')

  return (
    <Fragment>
      <Header />
      <main className='w-[1600px] m-auto'>
        <Search onSearch={key => setSearch(key)} />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ProtectedRoute><TrendingMusic search={search} /></ProtectedRoute>} />
            <Route path="/recommendation-music" element={<ProtectedRoute><RecommendedMusic search={search} /></ProtectedRoute>} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
        </BrowserRouter>
      </main>
    </Fragment>

  )
}

export default App
