import Home from './pages/Home/Home';
import './App.styles';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductDetails from './pages/ProductDetails/ProductDetails';


const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/details/:productId">
          <ProductDetails />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;