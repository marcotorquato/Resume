import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home/Home';
import { Links } from '../pages/Links/Links';



function MainRoutes() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="links" element={<Links/>} />
    </Routes>
    </>

  )
}

export default MainRoutes