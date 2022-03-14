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
    <li>
      {date} {content}
    </li>
  );
};
const Activities: FC = () => {
  const obj: { [key: string]: string[] } = activities;

  let key = 0;
  return (
    <section className="lg:mt-32 mt-16">
      <div className="">
        <Title>Activities</Title>
        <ul className="">
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
