import * as React from 'react';
import { FC } from 'react';

import { Link as Scroll } from 'react-scroll';

const Header: FC = () => {
  return (
    <section className="">
      <div className="bg-h-img sm:bg-w-img bg-cover bg-center relative h-screen w-screen py-64 md:py-48 lg:py-72 ">
        <div className="text-gray-600 md:text-white text-4xl md:text-6xl lg:text-8xl  text-center font-roboto">
          Shunta Yamagiwa
        </div>
        <div className="text-center text-2xl md:text-4xl text-white my-16 md:my-24 font-roboto">
          <Scroll
            to="about"
            href="/"
            smooth={true}
            className="rounded items-center inline-flex"
          >
            More...
            <svg
              className="w-10 h-10 md:w-16 md:h-16  inlineblock text-white"
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
