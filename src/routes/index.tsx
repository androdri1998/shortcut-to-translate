import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

import routesConstants from '../utils/routesConstants';

const HomePage = lazy(() => import('../pages/Home'));
const AllWords = lazy(() => import('../pages/AllWords'));

const Routes: React.FC = () => {
  return (
    <Suspense fallback={<>Carregando...</>}>
      <Switch>
        <Route path={routesConstants.HOME} exact component={HomePage} />
        <Route path={routesConstants.ALL_WORDS} component={AllWords} />
      </Switch>
    </Suspense>
  );
};

export default Routes;
