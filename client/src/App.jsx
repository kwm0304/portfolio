import { useState, useEffect } from 'react'
import './App.css'
import Carousel from './components/Carousel'
import Footer from './components/Footer.jsx'
import { BsSunFill, BsMoonFill } from 'react-icons/bs'


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
    <div className="flex text-blue-600 dark:text-zinc-300 p-0 m-0 dark:bg-gray-800 pt-4 pb-12">
    <button onClick={handleThemeSwitch}>{theme === 'dark' ? <BsSunFill className='text-3xl ml-2 text-cyan-400 hover:scale-110 hover:text-cyan-300'/> : <BsMoonFill className='text-3xl ml-2 hover:scale-110' />}</button> 
    <div className="container">
    <h1 className={theme === 'dark' ? 'neon' : 'text-6xl text-center ml-[11%] container heading'}>Kenan McKenzie</h1>
    </div>
    </div>
    <section className='bg-gray-350 dark:bg-slate-800 grid justify-center'>
      <Carousel />
      <Footer />
    </section>
    </>
  )
}

export default App
