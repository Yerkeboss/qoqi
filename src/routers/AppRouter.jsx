import { createBrowserHistory } from 'history';
import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { Basket } from '@/components/basket';
import { Footer, Navigation } from '@/components/common';
import * as ROUTES from '@/constants/routes';
import * as view from '@/views';
import AdminRoute from './AdminRoute';
import ClientRoute from './ClientRoute';
import PublicRoute from './PublicRoute';
import { Vacancies } from '@/components/jobs';
import { Creators } from '@/components/creator';
import { MasterForm } from '@/components/order';
import { Tender } from '@/components/tender';
import { Croud } from '@/components/croud';
import { Charity } from '@/components/charity';


// Revert back to history v4.10.0 because
// v5.0 breaks navigation
export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <>
      <Navigation />
      <Basket />
      <Switch>
        <Route
          component={view.Search}
          exact
          path={ROUTES.SEARCH}
        />
        <Route
          component={view.SearchEvent}
          exact
          path={ROUTES.SEARCHEVENT}
        />
        <Route
          component={view.Home}
          exact
          path={ROUTES.HOME}
        />
        <Route
          component={view.Shop}
          exact
          path={ROUTES.SHOP}
        />
        <Route
          component={view.About}
          exact
          path={ROUTES.ABOUT}
        />
        <Route
          component={view.Education}
          exact
          path={ROUTES.EDUCATION}
        />
        <Route
          component={view.Event}
          exact
          path={ROUTES.EVENTS}
        />
        <Route
          component={view.FeaturedProducts}
          exact
          path={ROUTES.FEATURED_PRODUCTS}
        />
        <Route
          component={view.RecommendedProducts}
          exact
          path={ROUTES.RECOMMENDED_PRODUCTS}
        />
        <PublicRoute
          component={view.SignUp}
          path={ROUTES.SIGNUP}
        />
        <PublicRoute
          component={view.SignIn}
          exact
          path={ROUTES.SIGNIN}
        />
        <PublicRoute
          component={view.ForgotPassword}
          path={ROUTES.FORGOT_PASSWORD}
        />
        <Route
          component={view.ViewProduct}
          path={ROUTES.VIEW_PRODUCT}
        />
        <Route
          component={view.ViewEvent}
          path={ROUTES.VIEW_EVENT}
        />
        <Route
          component={view.ViewUser}
          path={ROUTES.VIEW_USER}
        />
        <Route
          component={view.ViewOrder}
          path={ROUTES.VIEW_ORDER}
        />
        <Route
          component={Vacancies}
          path={ROUTES.VACANCIES}
        />
        <Route
          component={Creators}
          path={ROUTES.CREATORS}
        />
        <Route
          component={MasterForm}
          path={ROUTES.MASTERFORM}
        />
        <Route
          component={Tender}
          path={ROUTES.TENDER}
        />
        <Route
          component={Croud}
          path={ROUTES.CROUD}
        />
        <Route
          component={Charity}
          path={ROUTES.CHARITY}
        />
        <Route
          component={view.ViewTender}
          path={ROUTES.VIEW_TENDER}
        />
        <Route
          component={view.ViewCroud}
          path={ROUTES.VIEW_CROUD}
        />
        <Route
          component={view.ViewCharity}
          path={ROUTES.VIEW_CHARITY}
        />
        <Route
          component={view.ViewCharity2}
          path={ROUTES.VIEW_CHARITY2}
        />
        <ClientRoute
          component={view.UserAccount}
          exact
          path={ROUTES.ACCOUNT}
        />
        <ClientRoute
          component={view.EditAccount}
          exact
          path={ROUTES.ACCOUNT_EDIT}
        />
        <ClientRoute
          component={view.CheckOutStep1}
          path={ROUTES.CHECKOUT_STEP_1}
        />
        <ClientRoute
          component={view.CheckOutStep2}
          path={ROUTES.CHECKOUT_STEP_2}
        />
        <ClientRoute
          component={view.CheckOutStep3}
          path={ROUTES.CHECKOUT_STEP_3}
        />
        <ClientRoute
          component={view.AddProduct}
          path={ROUTES.ADD_PRODUCT_CLIENT}
        />
        <AdminRoute
          component={view.Dashboard}
          exact
          path={ROUTES.ADMIN_DASHBOARD}
        />
        <AdminRoute
          component={view.Products}
          path={ROUTES.ADMIN_PRODUCTS}
        />
        <AdminRoute
          component={view.AddProduct}
          path={ROUTES.ADD_PRODUCT}
        />
        <AdminRoute
          component={view.EditProduct}
          path={`${ROUTES.EDIT_PRODUCT}/:id`}
        />
        <AdminRoute
          component={view.Events}
          path={ROUTES.ADMIN_EVENTS}
        />
        <AdminRoute
          component={view.AddEvent}
          path={ROUTES.ADD_EVENT}
        />
        <AdminRoute
          component={view.EditEvent}
          path={`${ROUTES.EDIT_EVENT}/:id`}
        />
        <PublicRoute component={view.PageNotFound} />
      </Switch>
      <Footer />
    </>
  </Router>
);

export default AppRouter;
