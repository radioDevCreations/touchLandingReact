import { FC, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import HomePage from './components/Pages/HomePage/HomePage';
import ServicesPage from './components/Pages/ServicesPage/ServicesPage';
import Footer from './components/Footer/Footer';
import ProductsPage from './components/Pages/ProductsPage/ProductsPage';
import SignUp from './components/Pages/SignUp/SignUp';

const App: FC = () => {
  useEffect(() => {
    console.log("App");
  }, []);
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/services" component={ServicesPage} />
        <Route path="/products" component={ProductsPage} />
        <Route path="/sign-up" component={SignUp} />
      </Switch>
      <Footer/>
    </>
  );
};

export default App;
