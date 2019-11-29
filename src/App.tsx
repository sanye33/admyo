import React from 'react';
import { BrowserRouter as Router, Route } from  'react-router-dom'
import IndexPage from './pages/index'
import NotFound from './pages/404'
import routes from './config/routes'

const router = [
  { 
    name: 12,
    path: '/index',
    component: IndexPage
  }, {
    name: '404',
    path: '/404',
    component: NotFound
  }
]

console.log(`---------->`, router, routes)


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
