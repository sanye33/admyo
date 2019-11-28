import React from 'react';
import { BrowserRouter as Router, Route } from  'react-router-dom'
import Index from './pages/index'
import NotFound from './pages/404'

const router = [
  { 
    name: 12,
    path: '/index',
    component: Index
  }, {
    name: '404',
    path: '/404',
    component: NotFound
  }
]

const App: React.FC = () => {
  return (
    <Router>
      {
        router.map(route => {
          return <Route key={route.name} path={route.path} component={route.component}></Route>
        })
      }
    </Router> 
  );
}

export default App;
