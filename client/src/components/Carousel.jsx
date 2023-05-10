import { useState } from 'react'
//icons
import { BsChevronCompactLeft, BsChevronCompactRight, BsStripe, BsFillDatabaseFill } from 'react-icons/bs'
import { SiJavascript, SiReact, SiNodedotjs, SiMongodb, SiGraphql, SiApollographql, SiHandlebarsdotjs, SiTailwindcss, SiBootstrap, SiMysql  } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
//pics
import ecommerce from '../assets/shopshop.png'
import scheduler from '../assets/scheduler.png'
import sfc from '../assets/sfc.png'
import sideEffects from '../assets/sideEffects.png'
import me from '../assets/me.jpg'

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const slides = [
    {
      image: me, 
      title:"About Me", 
      description: "Hello! I'm Kenan, an enthusiastic and hardworking web developer from Charlotte, NC. I'm passionate about learning and problem solving, and I'm excited to start my career in web development. With a strong foundation in front-end and back-end devlopement, I create responsive and user friendly websites. I'm also experienced with frameworks like ReactJS and NextJS, enabling me more dynamic web applications. I thrive on challenges and bring a meticulous attention to detail to every project. I constantly seek new learning opportunities and stay up-to-date with the latest trends and technologies. In addition to technical skills, I value effective communication and collaboration. I enjoy working in teams and contributing my ideas to achieve remarkable reslts. Outside of web development I am an avid learner and enjoy exploring diverse topics. I'm actively seeking entry-level web developer positions to contribute my skills and enthusiasm in creating exceptional web experiences.", 
      tags: [< SiJavascript />, <SiReact />, <BsStripe />, <SiNodedotjs /> , <SiMongodb />, <SiGraphql />, <SiApollographql />, <TbBrandNextjs />, <BsFillDatabaseFill />, <SiMysql />, <SiTailwindcss />, <SiBootstrap />],
      visitUrl: 'https://kenanmckenzie.com/',
      sourceUrl: 'https://github.com/kwm0304/'
    },
    {
      image: ecommerce, 
      title:'E-commerce', 
      description: 'This e-commerce site features stripe integration and has a Node/Indexeddb backend. It uses Express, GraphQL and Apollo-Server to communicate between client and server. The user model keeps track of users and stores their shopping cart in locaStorage to be retrieved on login.', 
      tags: [< SiJavascript />, <SiReact />, <BsStripe />, <SiNodedotjs /> , <SiMongodb />, <SiGraphql />, <SiApollographql />, <BsFillDatabaseFill />],
      visitUrl: 'https://shop-shop-ecomm.herokuapp.com/',
      sourceUrl: 'https://github.com/kwm0304/shop-shop'
    },
    {
      image: scheduler, 
      title: 'Workday Scheduler', 
      description: 'This app uses the moment.js library to arrange tasks for your workday. The tasks are color-coded based on the time of day to help the user keep track of everything they need to get done.',
      tags: [<SiJavascript />],
      visitUrl: 'https://kwm0304.github.io/Day-Scheduler/',
      sourceUrl: 'https://github.com/kwm0304/Day-Scheduler'
    }, 
    {
      image: sfc, 
      title:'Soles for Christ', 
      description: 'This live landing page was made using React and Stripe and supports the mission trip I will be going on this November. The aim of the group is to collect donated shoes and deliver them to children in El Salvador.',
      tags: [<SiJavascript />, <SiReact />, <BsStripe />],
      visitUrl: 'https://soles-for-christ.com/',
      sourceUrl: 'https://github.com/kwm0304/sfc'
    }, 
    {
      image: sideEffects, 
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

  return(
<div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 xs:grid-cols-1 mb-6 xl:w-[1280px] xl:h-[760px] xs:w-full xl:w-full text-gray-600 bg-neutral-200 dark:bg-[#444654] dark:border-gray-900/50 border-b dark:text-gray-100 rounded-lg dark:text-cyan-400 ">
  <div className="IMG xl:pl-12 xs:px-2 h-full flex items-center group overflow-hidden xl:py-4">
    <img src={`${slides[currentIndex].image}`} className='w-full rounded-lg xs:pt-4 '/>
    <div className="flex grid-cols-2 items-center">
    <div className="group-hover:block absolute top-[50%] left-2 dark:text-cyan-400 flex items-center">
      <BsChevronCompactLeft onClick={prevSlide} size={30} className='group-hover:scale-110 font-bold' />
    </div>
    <div className="group-hover:block absolute top-[50%] right-2 dark:text-cyan-400">
      <BsChevronCompactRight onClick={nextSlide} size={30} className='group-hover:scale-110 font-bold'/>
    </div>
    </div>
  </div>
  <div className="CONTROLS grid grid-cols-1 gap-2 py-4 justify-items-center dark:text-cyan-400">
    <div className='w-5/6 rounded-lg grid grid-cols-1 gap-2 justify-items-center'>
      <div className="BTN relative group w-full">
        <div className="NEON dark:absolute dark:-inset-0.5 rounded-lg blur opacity-75 duration-1000 group-hover:duration-200 bg-gradient-to-r from-blue-600 to-cyan-300 group-hover:scale-110 hover:font-semibold hover:dark:text-cyan-300 group-hover:opacity-100"></div>
        <a href={`${slides[currentIndex].visitUrl}`} target='_blank' rel='noReferrer'><button className='shadow-lg dark:bg-gray-800 bg-white relative rounded-lg w-full py-2 uppercase dark:group-hover:text-cyan-400 group-hover:scale-110 hover:font-semibold hover:dark:text-cyan-300'>Visit</button></a>
      </div>
      <div className="relative group w-full">
      <div className=" NEON dark:absolute dark:-inset-0.5 rounded-lg dark:blur opacity-75 duration-1000 group-hover:duration-200 bg-gradient-to-r from-blue-600 to-cyan-300 group-hover:scale-110 hover:font-semibold hover:dark:text-cyan-300 group-hover:opacity-100"></div>
      <a href={`${slides[currentIndex].sourceUrl}`} target='_blank' rel='noReferrer'><button className='shadow-lg dark:bg-gray-800 bg-white relative rounded-lg w-full py-2 uppercase dark:group-hover:text-cyan-400 group-hover:scale-110 hover:font-semibold dark:hover:dark:text-cyan-300'>Source</button></a>
      </div>
    </div>
    <div className='xl:h-[500px] xs:h-[300px] w-5/6 mx-auto rounded-lg dark:bg-gray-800 bg-white text-center'>
      <h3 className='xl:text-2xl xl:mt-4 xs:mt-1 uppercase font-semibold text-gray-600 dark:text-lime-400'>{slides[currentIndex].title}</h3>
      <p className='mt-8 mx-8'>{slides[currentIndex].description}</p>
    </div>
    <div className='w-5/6 rounded-lg grid grid-cols-4  xl:gap-4 xs:gap-2 xs:py-3 justify-items-center  content-center bg-white dark:bg-gray-800 dark:text-lime-400  xs:text-base xl:text-xl'>
      {slides[currentIndex].tags.map((tag, index) => (
        <span key={index} className=''>{tag}</span>
      ))}
    </div>
  </div>
</div>
  )
}
export default Carousel