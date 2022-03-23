import * as React from 'react';
import { FC } from 'react';

import { Link as Scroll } from 'react-scroll';

const Header: FC = () => {
  return (
    <section className="">
      <div className="bg-h-img sm:bg-w-img bg-cover bg-center relative h-screen w-screen ">
        <div className="text-gray-600 md:text-white text-4xl md:text-6xl lg:text-8xl py-72 md:py-48 lg:py-80 text-center font-roboto">
          Shunta Yamagiwa
        </div>
        <div className="text-center text-4xl text-white font-roboto">
          <Scroll
            to="about"
            href="/"
            smooth={true}
            className="rounded inline-flex items-center "
          >
            <svg
              className="w-12 h-12 md:w-16 md:h-16  inlineblock text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19 13l-7 7-7-7m14-8l-7 7-7-7"></path>
            </svg>
            More...
            <svg
              className="w-12 h-12 md:w-16 md:h-16  inlineblock text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19 13l-7 7-7-7m14-8l-7 7-7-7"></path>
            </svg>
          </Scroll>
        </div>
      </div>
    </section>
  );
};
export default Header;
