import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { LoginView } from './features/auth';
import { Home } from './features/home';
import AuthUtil from './shared/auth';
import DashboardLayout from './shared/layout/DashboardLayout';
import MainLayout from './shared/layout/MainLayout';
import {ListagemCupomView, EditarCupomView} from './features/cupons';

const CustomRoute = (props) => {
  const { Page, Layout } = props;
  return (
    <Route {...props}>
      <Layout>
        <Page />
      </Layout>
    </Route>
  );
};

const PageWithLayout = (props) => {
  const { restrita } = props;
  const valid = AuthUtil.validateToken();

  if (!restrita) return <CustomRoute {...props} Layout={MainLayout} />;
  if (valid) return <CustomRoute {...props} Layout={DashboardLayout} />;
  return <Redirect exact to="/login" on />;
};

const Rotas = (props) => {
  return (
    <Switch>
      <Redirect exact from="/" to="/login" />
      <PageWithLayout exact path="/login" on Page={LoginView} />
      <PageWithLayout exact path="/home" on restrita={true} Page={ListagemCupomView} />
      <PageWithLayout
        exact
        path="/cupons"
        on
        restrita={true}
        Page={ListagemCupomView}
      />
      <PageWithLayout
        exact
        path="/cupons/edit/:cupomId"
        on
        restrita={true}
        Page={EditarCupomView}
      />
       <PageWithLayout
        exact
        path="/cupons/edit"
        on
        restrita={true}
        Page={EditarCupomView}
      />
    </Switch>
  );
};

export default Rotas;
