import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Store from './components/Store/Store';
import Checkout from './components/Checkout/Checkout';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Header from './components/Header/Header';
import Cart from './components/Cart/Cart';
import { getProducts } from './actions/productActions';
import { getCart } from './actions/cartActions';
import About from './components/About/About';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCart());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <main>
        <Switch>
          <Route path={['/', '/home']} exact component={Store} />
          <Route path={['/checkout']} component={Checkout} />
          <Route path={['/cart']} component={Cart} />
          <Route path={['/product']} component={ProductDetails} />
          <Route path={['/about']} component={About} />
        </Switch>
      </main>
    </div>
  );
};

export default App;
