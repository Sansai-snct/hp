import * as React from 'react';
import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';

interface Linkvalue {
  href: string;
  target?: '_blank';
  className?: string;
}

const Link: FC<Linkvalue> = ({ href, className, target, children }) => {
  return (
    <RouterLink to={href} className={className}>
      {children}
    </RouterLink>
  );
};

export default Link;
