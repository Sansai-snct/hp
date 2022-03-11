import * as React from 'react';
import { FC } from 'react';

import Title from '../components/TItle/Title';

const About: FC = () => {
  return (
    <section className="lg:mt-32 mt-16">
      <Title>About</Title>
      <div className="lg:mt-6 lg:px-60 mt-4 px-8">
        <p className="lg:mb-2 mb-1">名前: 山際駿太</p>
        <p className="lg:mb-2 mb-1">所属: 鈴鹿高専電子情報工学科</p>
        <p className="lg:mb-2 mb-1">年齢: 18歳</p>
        <p className="lg:mb-2 mb-1">
          担当: Webフロントエンド,モバイルアプリ開発,雑用
        </p>
      </div>
    </section>
  );
};
export default About;
