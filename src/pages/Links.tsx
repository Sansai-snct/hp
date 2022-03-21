import * as React from 'react';
import { FC } from 'react';

import twitter from '../images/twitter.png';
import github from '../images/github.png';

import wantedly from '../images/wantedly.png';

import Title from '../components/Title';

const Links: FC = () => {
  return (
    <section className="lg:mt-32 mt-16">
      <Title>Links</Title>
      <div className="mt-6 lg:px-60  px-8 font-noto">
        <ul className="flex">
          <li className="bg-blue-400 bg-auto w-12 h-12 mr-8 md:w-24 md:h-24 md:mr-16 ">
            <a
              href="https://twitter.com/sansai_dev"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src={twitter} alt="Twitter's logo" />
              Twitter
            </a>
          </li>

          <li className="bg-black bg-auto w-12 h-12 mr-8 md:w-24 md:h-24 md:mr-16">
            <a
              href="https://github.com/Sansai-snct"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src={github} alt="Github's logo" />
              Github
            </a>
          </li>

          <li className="w-12 h-12 mr-8 md:w-24 md:h-24 md:mr-16">
            <a
              href="https://www.wantedly.com/id/shunta_yamagiwa"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src={wantedly} alt="Wantedly's logo" />
              Wantedly
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Links;
