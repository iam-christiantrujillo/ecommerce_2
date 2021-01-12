import './App.css';
import {ProductProvider} from './ProductContext'
import Home from './views/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
  Redirect
} from "react-router-dom";

import CategoryInd from './views/CategoryInd'
import ProductInd from './views/ProductInd'
import Login from './views/Login'
import Signup from './views/Signup'
import SearchProducts from './views/SearchProducts';
import Cart from './views/Cart';




const Logout = () => {
  window.localStorage.removeItem('token');
  return(
    
    <Redirect to="/"/>
    
  ) 
}

function App() {
  
  return(

      <Router>

        <Switch>

        <ProductProvider>
              <Route exact path ="/">
                  <Home/>
              </Route>

              <Route exact path ="/search/:productName">
                  <SearchProducts/>
              </Route>

              <Route exact path ="/category/:name">
                  <CategoryInd/>
              </Route>

              <Route exact path ="/id/:idProduct">
                  <ProductInd/>
              </Route>

              <Route exact path ="/cart">
                  <Cart/>
              </Route>

              <Route exact path ="/login">
                  <Login/>
              </Route>

              <Route exact path ="/signup">
                  <Signup/>
              </Route>

              <Route exact path ="/logout">
                  <Logout/>
              </Route>
            
        </ProductProvider>

        </Switch>
        
      </Router>

    
   
  );
}

export default App;
