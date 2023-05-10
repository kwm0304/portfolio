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
    <>
    <div className="grid grid-cols-3 items-center text-gray-600 p-0 m-0 dark:bg-gray-800 pt-4 pb-12  ">
      <div className='COL1 '>
        <button onClick={handleThemeSwitch}>{theme === 'dark' ? <BsSunFill className='text-3xl ml-8 text-cyan-400 hover:scale-110 hover:text-cyan-300 hover:text-white'/> : <BsMoonFill className='dark:hover:text-white text-3xl ml-8 hover:scale-110 hover:text-gray-700' />}</button>
      </div>
      <div className="COL2 grid grid-cols-1 justify-content-center  text-center">
        <h1 className={theme === 'dark' ? 'neon' : 'text-6xl heading font-sans'}>Kenan McKenzie</h1>
      </div>
      <div className='COL3 '>
      <div className="flex justify-end gap-4 mr-8 dark:text-cyan-400 text-3xl ">
        <a href={Resume} download='Resume.pdf'>
          <FaFileDownload className='dark:hover:text-white hover:text-gray-700 text-3xl hover:scale-110 '/>
        </a>
        <a href='https://github.com/kwm0304' target='_blank'>
          <BsGithub className='dark:hover:text-white text-3xl hover:text-gray-700 hover:scale-110'/>
        </a>
        <a href='https://www.linkedin.com/in/kenan-mckenzie-29102025a/' target='_blank'>
          <BsLinkedin className='dark:hover:text-white text-3xl hover:text-gray-700 hover:scale-110' />
        </a>
      </div>
      </div>
    </div>
    <section className='bg-gray-350 dark:bg-slate-800 grid justify-center '>
      <Carousel />
      <Footer />
    </section>
    </>
  )
}

export default App
