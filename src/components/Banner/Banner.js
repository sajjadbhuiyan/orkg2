import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import grapBackground from '../../img/graph-background.svg';
import PlayVideo from '../PlayVideo/PlayVideo';

export default function Banner() {
  return (
    <>
        <div className='w-full h-full bg-no-repeat lg:mt-0 lg:pb-8 pt-28 text-center bg-right-top bg-nav-color banner' style={{backgroundImage:`url(${grapBackground})`}}>
            <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
              <div className='grid lg:place-items-end sm:place-items-center'>
                <h1 className='lg:text-4xl sm:text-3xl text-white'>Scholarly Knowledge.</h1>
              </div>
              
              <div className='grid lg:place-items-start sm:place-items-center lg:px-2 sm:px-0'>
                <span className='lg:text-4xl sm:text-3xl text-white'>
                    <Typewriter
                      words={['Structured.', 'FAIR.', 'Comparable.']}
                      loop
                      cursor
                      cursorStyle='|'
                      typeSpeed={90}
                      deleteSpeed={70}
                      delaySpeed={1000}
                    />
                </span>
              </div>
            </div>
            <p className='text-lg font-medium text-gray-300 py-4'>The Open Research Knowledge Graph (ORKG) aims to describe research papers in a structured manner. With the <br className='sm:hidden lg:block'/> ORKG, papers are easier to find and compare. <PlayVideo></PlayVideo> </p>
        </div>
    </>
  )
}
