import { useState, useEffect } from 'react'
import './App.css'
import Carousel from './components/Carousel'
import Footer from './components/Footer.jsx'
import { BsSunFill, BsMoonFill, BsGithub, BsLinkedin } from 'react-icons/bs'
import { FaFileDownload } from 'react-icons/fa'
import Resume from './assets/document.pdf'

function App() {
  const [theme, setTheme] = useState("Light")

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme])

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  }
  

  return (
    <div className=''>
    <div className="grid grid-cols-3 items-center text-gray-600 p-0 m-0 dark:bg-gray-800 pt-4 xl:pb-12 xs:pb-2">
      <div className='COL1 '>
        <button onClick={handleThemeSwitch}>{theme === 'dark' ? <BsSunFill className='xs:text-xl md:text-3xl lg:text-3xl xl:text-3xl xl:ml-8 xs:ml-4 text-cyan-400 hover:scale-110 hover:text-cyan-300 hover:text-white'/> : <BsMoonFill className='xs:text-xl dark:hover:text-white xl:text-3xl ml-8 hover:scale-110 hover:text-gray-700' />}</button>
      </div>
      <div className="COL2 grid grid-cols-1 justify-content-center  text-center">
        <h1 className={theme === 'dark' ? 'neon' : 'xl:text-6xl heading font-sans xs:text-lg'}>Kenan McKenzie</h1>
      </div>
      <div className='COL3  justify-self-end'>
      <div className="flex justify-end xl:gap-4 xl:mr-8 xs:mr-4 xs:gap-2  dark:text-cyan-400  ">
        <a href={Resume} download='Resume.pdf'>
          <FaFileDownload className='dark:hover:text-white hover:text-gray-700 xl:text-3xl xs:text-xl hover:scale-110 '/>
        </a>
        <a href='https://github.com/kwm0304' target='_blank' rel='noReferrer'>
          <BsGithub className='dark:hover:text-white xl:text-3xl hover:text-gray-700 hover:scale-110 xs:text-xl'/>
        </a>
        <a href='https://www.linkedin.com/in/kenan-mckenzie-29102025a/' target='_blank' rel='noReferrer'>
          <BsLinkedin className='dark:hover:text-white xl:text-3xl hover:text-gray-700 hover:scale-110 xs:text-xl' />
        </a>
      </div>
      </div>
    </div>
    <section className='bg-gray-350 dark:bg-slate-800 grid justify-center '>
      <Carousel />
      <Footer />
    </section>
    </div>
  )
}

export default App
