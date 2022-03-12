import * as React from 'react';
import { FC } from 'react';
import { Link as Scroll } from 'react-scroll';
const Header: FC = () => {
  return (
    <section className="">
      <div className="bg-h-img sm:bg-w-img bg-cover bg-center relative h-screen w-screen ">
        <div className="text-white text-3xl md:text-6xl lg:text-8xl py-48 lg:py-80 text-center font-shippori">
          Shunta Yamagiwa
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
