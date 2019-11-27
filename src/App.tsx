import React from 'react';
import { BrowserRouter as Router, Route } from  'react-router-dom'
import Abutton from './components/abutton'

const App: React.FC = () => {
  return (
    <Router>
      <Route path='/button' component={Abutton}></Route>
    </Router> 
  );
}

export default App;
