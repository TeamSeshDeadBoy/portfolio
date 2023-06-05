import ThreeWrapper from './3D/ThreeWrapper'
import React3d from './3D/React3d.jsx'
import Js3d from './3D/JS3d.jsx'
import Html3d from './3D/Html3d.jsx'
import Tailwind3d from './3D/Tailwind3d.jsx'
import Three3d from './3D/Three3d.jsx'
import Next3d from './3D/Next3d.jsx'
import svgMove from "../assets/move.svg"

const FrontStack = () => {
  return (
    <div 
    className="grid grid-cols-2 md:grid md:grid-cols-6 md:space-x-12 items-end justify-end min-h-[180px] md:pr-12">
            <div className='flex flex-col justify-center items-center w-[170px] justify-self-end relative'>
            <img src={svgMove} className='fill-[#243c5a] h-[18px] opacity-5 absolute bottom-9 right-5' />
            <ThreeWrapper>
              <React3d/>
            </ThreeWrapper>
              <p className='text-xl font-bold'>React</p>
            </div>
            <div className='flex flex-col justify-center items-center w-[170px] relative'>
            <img src={svgMove} className='fill-[#243c5a] h-[18px] opacity-5 absolute bottom-9 right-5' />
              <ThreeWrapper>
                <Js3d/>
              </ThreeWrapper>
              <p className='text-xl font-bold'>JavaScript</p>
            </div>
            <div className='flex flex-col justify-center items-center w-[170px] justify-self-center relative'>
            <img src={svgMove} className='fill-[#243c5a] h-[18px] opacity-5 absolute bottom-9 right-5' />
              <ThreeWrapper>
                <Html3d/>
              </ThreeWrapper>
              <p className='text-xl font-bold'>HTML + CSS</p>
            </div>
            <div className='flex flex-col justify-center items-center w-[170px] relative'>
            <img src={svgMove} className='fill-[#243c5a] h-[18px] opacity-5 absolute bottom-9 right-5' />
              <ThreeWrapper className="h-[200px]">
                <Tailwind3d/>
              </ThreeWrapper>
              <p className='text-xl font-bold'>Tailwind</p>
            </div>
            <div className='flex flex-col justify-center items-center w-[170px] relative'>
            <img src={svgMove} className='fill-[#243c5a] h-[18px] opacity-5 absolute bottom-9 right-5' />
              <ThreeWrapper className="h-[200px]">
                <Three3d/>
              </ThreeWrapper>
              <p className='text-xl font-bold'>Three.js</p>
            </div>
            <div className='flex flex-col justify-center items-center w-[170px] justify-self-start relative'>
            <img src={svgMove} className='fill-[#243c5a] h-[18px] opacity-5 absolute bottom-9 right-5'/>
            <ThreeWrapper className="h-[200px]">
              <Next3d/>
            </ThreeWrapper>
            <p className='text-xl font-bold'>Next.js</p>
          </div>
        </div>
  )
}

export default FrontStack