import * as React from 'react';
import { FC } from 'react';

interface WorkDetailInterface {
  name: string;
  content: string;
  src: string;
}

const WorkDetail: FC<WorkDetailInterface> = ({ name, content, src }) => {
  return (
    <div className="">
      <img className="" src={src} alt={name} />
      <div className="">
        <div className="">
          <div className=""> 作品名: {name} </div>
          <div className="">内容： {content}</div>
        </div>
      </div>
    </div>
  );
};

export default WorkDetail;
