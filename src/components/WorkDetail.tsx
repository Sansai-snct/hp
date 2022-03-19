import * as React from 'react';
import { FC } from 'react';

interface WorkDetailInterface {
  name: string;
  content: string;
  src: string;
  stack: string;
}

const WorkDetail: FC<WorkDetailInterface> = ({ name, content, src, stack }) => {
  return (
    <div className=" relactive h-72 w-72 bg-white rounded-lg border border-gray-200 shadow-md">
      <img
        className="w-full max-h-32 block object-cover scale-90"
        src={src}
        alt={name}
      />
      <div className="mt-4">
        <div className="mb-4 px-4 font-noto">
          <div className=""> 作品名 : {name} </div>
          <div className="">内容 : {content}</div>
          <div className="">使用技術 : {stack}</div>
        </div>
      </div>
    </div>
  );
};

export default WorkDetail;
