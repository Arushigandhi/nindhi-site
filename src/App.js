import './App.css';
import React, {Suspense } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useRoutes} from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Loader from './components/Loader';
import {Home} from './pages/Home/Home';
import {Nindhi} from './pages/Nindhi/Nindhi';
import {Gallery} from './pages/Gallery/Gallery';


function App() {

  const MainRoutes =[
    { path: '/home', element: <Home/>},
    { path: '/nindhi', element: <Nindhi/>},
    { path: '/gallery', element: <Gallery/>},
    { path: '/', element: <Home/>},
    


  ]

  const mainRouting = useRoutes(MainRoutes);


  return (
    <div className="app-main-div">
      <ScrollToTop />
      <Suspense fallback={<Loader />}>
      {mainRouting}
      </Suspense>
    </div>
  );
}

export default App;