import React from 'react';
import { BallCanvas } from './canvas';
import { sectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { StarsCanvas } from './canvas';

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
      <StarsCanvas />
    </div>
  )
}

export default sectionWrapper(Tech, "");