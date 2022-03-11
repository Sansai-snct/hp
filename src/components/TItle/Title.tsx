import * as React from 'react';
import { FC } from 'react';

const Title: FC = ({ children }) => {
  return (
    <div className="flex lg:px-60 px-16 font-normal">
      <div className="lg:text-4xl text-2xl flex-grow relative font-title">
        {children}
        <span className="absolute left-0 -bottom-1.5  w-full h-1 bg-gradient-to-r from-green-700 to-white" />
      </div>
      <div className="flex-grow-0 relative">
        <span className="absolute left-0 bottom-0 w-full h-1" />
      </div>
    </div>
  );
};
export default Title;
