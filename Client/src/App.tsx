// export default function App() {
//   return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
// }


import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
// import HoneyComponent from './components/HoneyComponent';
// import WaxComponent from './components/WaxComponent';
// import MeadComponent from './components/MeadComponent';
// import OtherServicesComponent from './components/OtherServicesComponent';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        {/* <Route path="/honey" component={HoneyComponent} />
        <Route path="/wax" component={WaxComponent} />
        <Route path="/mead" component={MeadComponent} />
        <Route path="/other-services" component={OtherServicesComponent} /> */}
      </Switch>
    </Router>
  );
};

export default App;
