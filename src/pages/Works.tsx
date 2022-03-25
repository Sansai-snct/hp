import * as React from 'react';
import { FC } from 'react';

import Title from '../components/Title';
import WorkDetail from '../components/WorkDetail';

import kigalt from '../images/kigalt.webp';
import bgw from '../images/bg-w1.webp';

const Works: FC = () => {
  return (
    <section className="lg:mt-32 mt-16">
      <Title>Works</Title>
      <div className="mt-6 lg:px-60 px-8 md:flex">
        <div className="flex flex-wrap  w-full lg:w-3/12  md:mr-4 mb-4">
          <WorkDetail
            name="KigaLT"
            src={kigalt}
            content="パソコン甲子園2021で発表したLTプラットフォーム"
            stack="React , TypeScript , css , FireStore , Skyway"
          />
        </div>
        <div className="flex flex-wrap w-full lg:w-3/12">
          <WorkDetail
            name="ポートフォリオ"
            src={bgw}
            content="このポートフォリオです。"
            stack="React , TypeScript , Tailwindcss "
          />
        </div>
      </div>
    </section>
  );
};
export default Works;
