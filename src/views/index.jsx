import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

const Game1 = lazy(() => import('./Game'));

const index = () => {
  return (
    <Switch>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Route path='/' component={Game1} />
      </Suspense>
    </Switch>
  );
};

export default index;
