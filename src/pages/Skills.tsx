import * as React from 'react';
import { FC } from 'react';

import Title from '../components/Title';

import js from '../images/skills/js.webp';
import farm from '../images/skills/farm.webp';
import nextjs from '../images/skills/next.webp';
import react from '../images/skills/react.webp';
import ts from '../images/skills/typescript.webp';
import swift from '../images/skills/swift.webp';
import git from '../images/skills/git.png';
import cpp from '../images/skills/cpp.webp';
import python from '../images/skills/python.webp';
import Github from '../images/github.webp';
import fb from '../images/skills/firebase.webp';

const Skills: FC = () => {
  return (
    <section className="lg:mt-32 mt-16">
      <Title>Skills</Title>
      <div className="mt-6 lg:px-60 px-8 font-noto">
        <ul className="flex flex-wrap flex-row">
          <li className=" mb-10 shadow-md w-24 h-24 mr-8">
            <img src={farm} width="96" height="96" alt="farm's logo" />
            Rice farming
          </li>
          <li className=" mb-10 bg-white  w-24 h-24 mr-8">
            <img src={swift} width="96" height="96" alt="Swift's logo" />
            Swift
          </li>

          <li className=" mb-10  bg-white w-24 h-24 mr-8">
            <img src={python} width="96" height="96" alt="Python's logo" />
            Python
          </li>

          <li className="mb-10 bg-white w-24 h-24 mr-8">
            <img src={cpp} width="96" height="96" alt="Cpp's logo" />
            C++
          </li>
          <li className="mb-10  w-24 h-24 mr-8">
            <img src={ts} width="96" height="96" alt="ts's logo" />
            Typescript
          </li>

          <li className=" mb-10  w-24 h-24 mr-8">
            <img src={js} width="96" height="96" alt="js's logo" />
            JavaScript
          </li>

          <li className=" mb-10  w-24 h-24 mr-8">
            <img src={react} width="96" height="96" alt="react's logo" />
            React.js
          </li>

          <li className=" mb-10  w-24 h-24 mr-8">
            <img src={nextjs} width="96" height="96" alt="next's logo" />
            Next.js
          </li>

          <li className=" mb-10  w-24 h-24 mr-8">
            <img src={git} width="96" height="96" alt="git's logo" />
            Git
          </li>

          <li className="bg-black mb-10  w-24 h-24 mr-8">
            <img src={Github} width="96" height="96" alt="github's logo" />
            Git Hub
          </li>

          <li className=" mb-10  w-24 h-24 mr-8">
            <img src={fb} width="96" height="96" alt="fb's logo" />
            Firebase
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Skills;
