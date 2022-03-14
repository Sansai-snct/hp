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
      <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
      <li>
        <span className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          {date}
        </span>
        <br />

        <span className="mb-4 text-base font-normal text-gray-700 dark:text-gray-400">
          {content}
        </span>
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
        <ul className="relative border-l border-gray-300 dark:border-gray-700">
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
