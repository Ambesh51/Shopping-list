import './App.css';
import {BrowserRouter as Router, Switch, Route} from  "react-router-dom";

import Header from './containers/Header';
import ProductListing from './containers/ProductListing';
import ProductDetails from './containers/ProductDetails';
import AddtoCart from "./containers/AddtoCart"



function App() {
  return (
    <div className="App">
      {/* hello */}
    <Router>
      <Header/>
      <Switch>
      <Route path="/"  exact={true} component={ProductListing}/>
      <Route path="/product/:productId" exact={true} component={ProductDetails}/>
      <Route path="/product/:productName/:productId" exact={true} component={AddtoCart}/>
      <Route path="*"><h1>Page not found</h1></Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
