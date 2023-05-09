import { useState } from 'react'
//icons
import { BsChevronCompactLeft, BsChevronCompactRight, BsStripe, BsFillDatabaseFill } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'
import { SiJavascript, SiReact, SiNodedotjs, SiMongodb, SiGraphql, SiApollographql  } from 'react-icons/si'
//pics
import ecommerce from '../assets/shopshop.png'
import scheduler from '../assets/scheduler.png'
import sfc from '../assets/sfc.png'
import sideEffects from '../assets/sideEffects.png'

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const slides = [
    {image: ecommerce, 
      title:'E-commerce', 
      description: 'This e-commerce site features stripe integration and has a Node/Indexeddb backend. It uses Express, GraphQL and Apollo-Server to communicate between client and server. The user model keeps track of users and stores their shopping cart in locaStorage to be retrieved on login.', 
      tags: [< SiJavascript />, <SiReact />, <BsStripe />, <SiNodedotjs /> , <SiMongodb />, <SiGraphql />, <SiApollographql />, <BsFillDatabaseFill />],
      visitUrl: 'https://shop-shop-ecomm.herokuapp.com/',
      sourceUrl: 'https://github.com/kwm0304/shop-shop'
    },
    {image: scheduler, 
      title: 'Workday Scheduler', 
      description: 'This app uses the moment.js library to arrange tasks for your workday. The tasks are color-coded based on the time of day to help the user keep track of everything they need to get done.',
      tags: [<SiJavascript />],
      visitUrl: 'https://kwm0304.github.io/Day-Scheduler/',
      sourceUrl: 'https://github.com/kwm0304/Day-Scheduler'
    }, 
    {image: sfc, 
      title:'Soles for Christ', 
      description: 'This live landing page was made using React and Stripe and supports the mission trip I will be going on this November. The aim of the group is to collect donated shoes and deliver them to children in El Salvador.',
      tags: [<SiJavascript />, <SiReact />, <BsStripe />],
      visitUrl: 'https://soles-for-christ.com/',
      sourceUrl: 'https://github.com/kwm0304/sfc'
    }, 
    {image: sideEffects, 
      title: 'sideFX', 
      description: "SideFX is an app that helps you visualize the possible side effects of your medications. It retrieves reported side effects of all the user's given medications from fda.gov and combines them all into a pie chart to help you better understand possible causes of what you may be feeling.  ",
      tags: [<SiJavascript />, <SiReact />],
      visitUrl: 'https://kwm0304.github.io/sideEffects/',
      sourceUrl: 'https://github.com/kwm0304/sideEffects'    
    }
  ]
  

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex)
  }

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex)
  }

  return(
<div className="grid grid-cols-2  mb-6 w-[1280px] h-[780px]  bg-neutral-200 dark:bg-[#444654] dark:border-gray-900/50 border-b dark:text-gray-100 rounded-lg dark:text-cyan-400 ">
  <div className="IMG pl-12 h-full flex items-center group">
    <img src={`${slides[currentIndex].image}`} className='w-full rounded-lg'/>
    <div className=" group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 ">
      <BsChevronCompactLeft onClick={nextSlide} size={30} className='group-hover:scale-110 font-bold' />
    </div>
    <div className=" group-hover:block  absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 ">
      <BsChevronCompactRight onClick={nextSlide} size={30} className='group-hover:scale-110 font-bold'/>
    </div>
  </div>
  <div className="CONTROLS grid grid-cols-1 gap-2 py-4 justify-items-center">
    <div className='w-5/6 rounded-lg grid grid-cols-1 gap-2 justify-items-center'>
      <div className="BTN relative group w-full">
        <div className="NEON absolute -inset-0.5 rounded-lg blur opacity-75 duration-1000 group-hover:duration-200 bg-gradient-to-r from-blue-600 to-cyan-300 group-hover:scale-110 hover:font-semibold hover:dark:text-cyan-300 group-hover:opacity-100"></div>
        <a href={`${slides[currentIndex].visitUrl}`} ><button className='bg-gray-800 relative rounded-lg w-full py-2 uppercase group-hover:text-cyan-400 group-hover:scale-110 hover:font-semibold hover:dark:text-cyan-300'>Visit</button></a>
      </div>
      <div className="relative group w-full">
      <div className="NEON absolute -inset-0.5 rounded-lg blur opacity-75 duration-1000 group-hover:duration-200 bg-gradient-to-r from-blue-600 to-cyan-300 group-hover:scale-110 hover:font-semibold hover:dark:text-cyan-300 group-hover:opacity-100"></div>
      <a href={`${slides[currentIndex].sourceUrl}`} ><button className='bg-gray-800 relative rounded-lg w-full py-2 uppercase group-hover:text-cyan-400 group-hover:scale-110 hover:font-semibold hover:dark:text-cyan-300'>Source</button></a>
      </div>
    </div>
    <div className='h-[500px] w-5/6 mx-auto rounded-lg bg-gray-800 bg-white text-center'>
      <h3 className='text-2xl mt-4 uppercase font-semibold'>{slides[currentIndex].title}</h3>
      <p className='mt-24 mx-6'>{slides[currentIndex].description}</p>
    </div>
    <div className='w-5/6 rounded-lg grid grid-cols-4  gap-4 place-content-center  dark:bg-gray-800 space-evenly text-xl'>
      {slides[currentIndex].tags.map((tag, index) => (
        <span key={index} className='mx-auto'>{tag}</span>
      ))}
    </div>
  </div>
</div>
  )
}
export default Carousel