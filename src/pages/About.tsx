import * as React from 'react';
import { FC } from 'react';

import Title from '../components/Title';

const About: FC = () => {
  return (
    <section id="about" className="lg:mt-32 mt-16">
      <Title>About</Title>
      <div className="mt-6 lg:px-60 px-8 font-noto">
        <p className="mb-2">
          鈴鹿高専4年生の山際駿太です。三重県生まれの18歳です。
        </p>
        <p className="mb-2">
          クライアントサイドを主に担当しており、ReactやNextを使用しています。
        </p>
        <p className="mb-2">MacBook Air2020 M1を使用しています。</p>
      </div>
    </section>
  );
};
export default About;
