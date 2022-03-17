import * as React from 'react';
import { FC } from 'react';

import Title from '../components/Title';

import js from '../images/js.png';
import nextjs from '../images/nextjs.png';
import react from '../images/react.png';
import ts from '../images/typescript.png';
import swift from '../images/swift.png';
import git from '../images/git.png';
import cpp from '../images/cpp.png';
import python from '../images/python.png';

const Skills: FC = () => {
  return (
    <section className="lg:mt-32 mt-16">
      <Title>Skills</Title>
      <div className="mt-6 lg:px-60 px-8 ">
        <ul className="flex flex-wrap flex-row">
          <li className=" mb-10 bg-white  w-24 h-24 mr-8">
            <img src={swift} alt="Swift's logo" />
            Swift
          </li>

          <li className=" mb-10  bg-white w-24 h-24 mr-8">
            <img src={python} alt="Python's logo" />
            Python
          </li>

          <li className="mb-10 bg-white w-24 h-24 mr-8">
            <img src={cpp} alt="Cpp's logo" />
            C++
          </li>
          <li className="mb-10  w-24 h-24 mr-8">
            <img src={ts} alt="ts's logo" />
            Typescript
          </li>

          <li className=" mb-10  w-24 md:h-24 mr-8">
            <img src={js} alt="js's logo" />
            JavaScript
          </li>

          <li className=" mb-10  w-24 md:h-24 mr-8">
            <img src={git} alt="next's logo" />
            Git
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Skills;
