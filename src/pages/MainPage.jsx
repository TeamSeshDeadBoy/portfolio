/* eslint-disable react/prop-types */
import Hello from '../components/Hello'
import Main from '../components/3D/Main'
import MainReplacement from '../components/3D/MainReplacement'
import { useEffect, useState } from 'react'

const MainPage = ({status}) => {
  const [show, setShow] = useState(status)

  useEffect(() => {
    setShow(status)
  }, [status])

  return (
    <div data-scroll-section className='h-[100vh] w-[100vw] flex flex-row items-center justify-center relative' id='main'>
      <div className='flex flex-row h-full w-full'>
        <Hello />
        {!show ? <Main/> : <MainReplacement />}
      </div>
    </div>
  )
}

export default MainPage