import * as React from 'react';
import { FC } from 'react';

import Title from '../components/Title';

const About: FC = () => {
  return (
    <section id="about" className="lg:mt-32 mt-16">
      <Title>About</Title>
      <div className="mt-6 lg:px-60 px-8">
        <p className="mb-2">
          鈴鹿高専新4年生の山際駿太です。三重県生まれの三重県育ちで、米農家です。
        </p>
        <p className="mb-2">普段はWebフロントエンドを中心に勉強しています。</p>
        <p className="mb-2">
          最近は技術の深掘りをして理解を深めようとしています。
        </p>
      </div>
    </section>
  );
};
export default About;
