import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Store from './components/Store/Store';
import Checkout from './components/Checkout/Checkout';
import ProductDetails from './components/ProductDetails/ProductDetails';

const App = () => (
  <div>
    <main>
      <Switch>
        <Route path={['/', '/home']} exact component={<Store />} />
        <Route path={['/checkout']} component={<Checkout />} />
        <Route path={['/product']} component={<ProductDetails />} />
      </Switch>
    </main>
  </div>
);

export default App;
