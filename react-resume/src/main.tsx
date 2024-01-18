
import ReactDOM from 'react-dom/client'
import MainRoutes from './routes/routes';

import { BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';

import ReactGA from 'react-ga';

// Inicializa o Google Analytics
ReactGA.initialize('G-L4R42FQEPY');



ReactDOM.createRoot(document.getElementById('root')!).render(

  <BrowserRouter>
    <MainRoutes />
  </BrowserRouter>
  
)
