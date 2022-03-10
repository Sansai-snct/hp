import * as React from 'react';
import { FC } from 'react';

const Title: FC = ({ children }) => {
  return (
    <div>
      <div className="text-5xl">{children}</div>
    </div>
  );
};
export default Title;
