import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import { LOGIN } from 'utils/routes';

const Login = lazy(() => import('pages/login'));

function App() {
  return (
    <Suspense fallback="<h1>carregando</h1>">
      <Switch>
        <Route path={LOGIN} component={Login} />
      </Switch>
    </Suspense>
  );
}

export default App;
