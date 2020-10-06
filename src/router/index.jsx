import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from '@views/Home';
import Detail from '@views/Detail';

import Modal from '@components/organisms/Modal';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/detail/:id" component={Detail} exact />
    </Switch>

    <ToastContainer
      position="top-center"
    />
    <Modal />
  </BrowserRouter>
);

export default Router;