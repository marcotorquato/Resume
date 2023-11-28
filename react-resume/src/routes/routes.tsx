import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home/Home';
import { Pomotimer } from '../pages/Pomotimer/Pomotimer';



function MainRoutes() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/pomotimer" element={<Pomotimer/>} />
    </Routes>,
    </>

  )
}

export default MainRoutes