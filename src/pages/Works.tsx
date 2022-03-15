import * as React from 'react';
import { FC } from 'react';

import Title from '../components/Title';
import WorkDetail from '../components/WorkDetail';

import kigalt from '../images/kigalt.jpeg';

const Works: FC = () => {
  return (
    <section className="lg:mt-32 mt-16">
      <Title>Works</Title>
      <div className="mt-6 lg:px-60  px-8">
        <WorkDetail
          name="KigaLT"
          src={kigalt}
          content="パソコン甲子園2021で発表したLTプラットフォーム"
        />
      </div>
    </section>
  );
};
export default Works;
