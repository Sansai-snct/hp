import * as React from 'react';
import { FC, lazy, Fragment, Suspense } from 'react';
import Header from '../components/Header';

const About = lazy(() => import('./About'));
const Activities = lazy(() => import('./Activities'));
const Works = lazy(() => import('./Works'));
const Skills = lazy(() => import('./Skills'));

const Index: FC = () => {
  return (
    <Fragment>
      <Header />
      <Suspense fallback={<></>}>
        <About />
        <Activities />
        <Skills />
        <Works />
      </Suspense>
    </Fragment>
  );
};
export default Index;
