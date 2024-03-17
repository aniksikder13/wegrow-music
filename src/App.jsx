import { useState, Fragment } from 'react'
import Header from './component/nav/Header'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RecommendedMusic from './pages/recommendedMusic'
import Auth from './pages/auth';
import TrendingMusic from './pages/trendingMusic'

function App() {

  return (


    <Fragment>
      <Header />
      <main className='w-[1600px] m-auto'>
        <BrowserRouter>
          <Routes>
            <Route path="/trending-music" element={<TrendingMusic />} />
            <Route path="/recommendation-music" element={<RecommendedMusic />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
        </BrowserRouter>
      </main>
    </Fragment>

  )
}

export default App
