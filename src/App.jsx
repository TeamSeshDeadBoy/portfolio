import { useEffect, useState} from "react"
import Header from "./components/Header"
import MainPage from "./pages/MainPage"
import TechStack from "./pages/TechStack"
import LoadingScreen from "./components/Loader"
import Toggler from "./pages/Toggler"
import ContactsPage from "./pages/ContactsPage"

function App() {

  const [loaded, setLoaded] = useState(false)
  const [threed, setthreed] = useState(false)
  const [temp, setTemp] = useState(false)

  useEffect(() => {
    return () => {
      setTimeout(() => setLoaded(true), 6000)
    }
  }, [])

  const getState = (on) => {
    setthreed(on)
  }

  useEffect(() => {
    console.log("setState app.jsx", threed)
    setTemp(threed)
  }, [threed])
  
  

  return (
  // <LocomotiveScrollProvider
  //   options={{smooth: true }}
  //   watch={[]}
  //   containerRef={containerRef}
  // >
  // <main ref={containerRef}>
        <div className="flex flex-row items-center justify-center relative">
          <div className={`flex flex-col justify-center items-center
          ${
            loaded ? "" : "overflow-y-hidden max-h-screen" 
          }
          `}>
              {loaded == false ? <LoadingScreen  /> : <></>}
              {!loaded ? <div className="min-h-[2000px] w-screen z-10"></div> : <></>}
              <Header/>
              <MainPage />
              <TechStack status={temp}/>
              <ContactsPage status={temp}/>
              <Toggler setState={getState}/>
          </div>
        </div>
    //   </main>
    // </LocomotiveScrollProvider>
  )
}

export default App
