import * as React from 'react';
import { FC } from 'react';

const Header: FC = () => {
  return (
    <section className="">
      <div className="bg-h-img sm:bg-w-img bg-cover bg-center relative h-screen w-screen ">
        <div className="text-white text-3xl md:text-6xl lg:text-8xl py-48 lg:py-80 text-center font-shippori">
          Shunta Yamagiwa
        </div>
      </div>
    </section>
  );
};
export default Header;
