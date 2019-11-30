import React from 'react';
import { BrowserRouter, Route } from  'react-router-dom';
import IndexPage from './pages/index';
import Login from './pages/login'
import NotFound from './pages/notFound';
import './App.css';


const baseRoutes = [
  { 
    name: 'index',
    path: '/',
    component: IndexPage
  }, {
    name: 'login',
    path: '/login',
    component: Login
  }, {
    name: 'notFound',
    path: '/404',
    component: NotFound
  }
]

const App: React.FC = () => {
  return (
    <BrowserRouter>
      {
        baseRoutes.map(route => {
          return <Route key={route.name} path={route.path} component={route.component}></Route>
        })
      }
    </BrowserRouter> 
  );
}

export default App;
