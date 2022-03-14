import * as React from 'react';
import { FC, lazy, Fragment, Suspense } from 'react';
import Header from '../components/Header';
const About = lazy(() => import('./About'));
const Activities = lazy(() => import('./Activities'));
const Index: FC = () => {
  return (
    <Fragment>
      <Suspense fallback={<></>}>
        <Header />
        <About />
        <Activities />
      </Suspense>
    </Fragment>
  );
};
export default Index;
