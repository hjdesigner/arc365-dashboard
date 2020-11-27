import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Header } from 'components';
import * as routes from 'utils/routes';

const createCategory = lazy(() => import('pages/createCategory'));

const Main = () => (
  <>
    <Header />
    <Suspense fallback="Loading....">
      <Switch>
        <Route path={routes.CADASTO_CATEGORIA} exact component={createCategory} />
      </Switch>
    </Suspense>
  </>
);

export default Main;
