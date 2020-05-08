import React from 'react';
import './styles/main.css';
import SideMenu from './components/sideMenu';
import Operation from './components/operation';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className='pt-6 px-8 h-100 font-body text-sm'>
      <div className="flex xl:justify-between">
      <Switch>
          <Route path="/operation">
            <Operation />
          </Route>
          <Route path="/reports">
            <div className="bg-cyan-100 h-12">reports</div>
          </Route>
          <Route path="/contragents">
            <div className="bg-cyan-100 h-12">contragents</div>
          </Route>
          <Route path="/works">
            <div className="bg-cyan-100 h-12">works</div>
          </Route>
          <Route path="/account">
            <div className="bg-cyan-100 h-12">account</div>
          </Route>
          <Route path="/person">
            <div className="bg-cyan-100 h-12">person</div>
          </Route>
          <Route path="/">
            <Operation />
          </Route>
        </Switch>
        <SideMenu />
      </div>
    </div>
    </Router>
  );
}

export default App;
