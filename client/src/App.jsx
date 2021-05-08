import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Store from './components/Store/Store';
import Checkout from './components/Checkout/Checkout';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Header from './components/Header/Header';
import Cart from './components/Cart/Cart';
import { getProducts } from './actions/productActions';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
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
        </Switch>
      </main>
    </div>
  );
};

export default App;
