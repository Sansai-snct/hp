import * as React from 'react';
import { FC } from 'react';
import Link from '../components/Link';
import { Link as Scroll } from 'react-scroll';

import twitter from '../images/twitter.png';
import github from '../images/github.png';

const Header: FC = () => {
  return (
    <section className="">
      <div className="bg-h-img sm:bg-w-img bg-cover bg-center relative h-screen w-screen ">
        <div className="text-white text-3xl md:text-6xl lg:text-8xl py-48 lg:py-80 text-center font-roboto">
          Shunta Yamagiwa
        </div>
        <div className="absolute top-1/4 -right-0 z-50 lg:scale-50">
          <Link href="https://github.com/Sansai-snct" target="_blank">
            <img
              src={twitter}
              alt="Twitter's logo"
              className="lg:mb-16 scale-50 lg:scale-100"
            />
          </Link>
          <Link href="https://twitter.com/sansai_dev" target="_blank">
            <img
              src={github}
              alt="Github's logo"
              className="lg:mb-16 scale-50 lg:scale-100"
            />
          </Link>
          <Link
            href="https://www.instagram.com/sansai_l4z/"
            target="_blank"
          ></Link>
        </div>
        <div className="text-4xl text-center">
          <Scroll
            to="about"
            smooth={true}
            className="bg-white hover:bg-gray-300  py-2 px-2 rounded inline-flex items-center"
          ></Scroll>
        </div>
      </div>
    </section>
  );
};
export default Header;
