import * as React from 'react';
import { FC } from 'react';

const Title: FC = ({ children }) => {
  return (
    <div className="flex font-normal pb-1 mb-3">
      <span className="text-4xl flex-grow relative font-title">
        {children}
        <span className="absolute left-0 bottom-0 w-full h-1" />
      </span>
      <span className="flex-grow-0 relative">
        <span className="absolute left-0 bottom-0 w-full h-1" />
      </span>
    </div>
  );
};
export default Title;
