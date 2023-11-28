
import ReactDOM from 'react-dom/client'
import MainRoutes from './routes/routes';

import { BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';



ReactDOM.createRoot(document.getElementById('root')!).render(

  <BrowserRouter>
    <MainRoutes />
  </BrowserRouter>
  
)
