import { BsGithub, BsLinkedin } from "react-icons/bs"
const Footer = () => {
return(
  <>
  <div className="flex xl:gap-12 xl:text-4xl  justify-center xs:gap-4 xs:text-2xl xl:pb-8 text-gray-600 h-full">
  <a href='https://github.com/kwm0304' target='_blank' rel='noReferrer'>
          <BsGithub className='dark:hover:text-white xl:text-3xl hover:text-gray-700 hover:scale-110 xs:text-xl'/>
        </a>
        <a href='https://www.linkedin.com/in/kenan-mckenzie-29102025a/' target='_blank' rel='noReferrer'>
          <BsLinkedin className='dark:hover:text-white xl:text-3xl hover:text-gray-700 hover:scale-110 xs:text-xl' />
        </a>
  </div>
  </>
)
}
export default Footer