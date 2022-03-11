import * as React from 'react';
import { FC, lazy, Fragment, Suspense } from 'react';

const About = lazy(() => import('./About'));
const Histories = lazy(() => import('./Histories'));
const Index: FC = () => {
  return (
    <Fragment>
      <Suspense fallback={<></>}>
        <About />
        <Histories />
      </Suspense>
    </Fragment>
  );
};
export default Index;
