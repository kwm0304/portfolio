import { BsFillTelephoneFill, BsFillEnvelopeFill } from "react-icons/bs"
const Footer = () => {
return(
  <>
  <div className="flex xl:gap-12 xl:text-4xl  justify-center xs:gap-4 xs:text-2xl xl:pb-8  h-full">
    <a href="tel:704-796-4326" target='_blank' rel='noReferrer'><BsFillTelephoneFill className="xs:text-2xl xl:text-4xl dark:text-cyan-400 dark:hover:text-white hover:scale-110 text-gray-600 hover:text-gray-700"/></a>
    <a href='mailto:mckenzie.kenan.90@gmail.com' target='_blank' rel='noReferrer'><BsFillEnvelopeFill className="xs:text-2xl xl:text-4xl dark:text-cyan-400 dark:hover:text-white hover:scale-110 text-gray-600 hover:text-gray-700"/></a>
  </div>
  </>
)
}
export default Footer