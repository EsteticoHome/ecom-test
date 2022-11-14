import React from 'react'
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom'
import { EcomIndex } from '../../pages'; 
import { Header } from '../../components'

const MyRoutes = () => {

    const MainApp = () => (
        <>
            <Header />
                <Outlet />
        </>
    );

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainApp />}>
                <Route index element={<EcomIndex />}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default MyRoutes