import * as React from 'react';
import { FC } from 'react';

import Title from '../components/Title';
import activities from '../data/activity.json';

interface AcitivityInterface {
  date: string;
  content: string;
}

const Activity: FC<AcitivityInterface> = ({ date, content }) => {
  return (
    <div className="mb-8 ml-6">
      <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white"></div>
      <li>
        <span className="text-sm leading-none text-gray-400">{date}</span>
        <br />
        <span className="text-base ">{content}</span>
      </li>
    </div>
  );
};
const Activities: FC = () => {
  const obj: { [key: string]: string[] } = activities;
  let key = 0;
  return (
    <section className="lg:mt-32 mt-16">
      <Title>Activities</Title>
      <div className="mt-6 lg:px-60  px-8">
        <ul className="relative border-l border-gray-300 font-noto">
          {Object.keys(obj).map((date) => {
            return obj[date].map((value) => {
              key++;
              return <Activity date={date} content={value} key={key} />;
            });
          })}
        </ul>
      </div>
    </section>
  );
};
export default Activities;
