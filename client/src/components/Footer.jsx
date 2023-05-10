import { BsFillTelephoneFill, BsFillEnvelopeFill } from "react-icons/bs"
const Footer = () => {
return(
  <>
  <div className="flex gap-12 text-4xl  justify-center pb-8 h-full">
    <a href="tel:704-796-4326" target='_blank'><BsFillTelephoneFill className="dark:text-cyan-400 dark:hover:text-white hover:scale-110 text-gray-600 hover:text-gray-700"/></a>
    <a href='mailto:mckenzie.kenan.90@gmail.com' target='_blank'><BsFillEnvelopeFill className="dark:text-cyan-400 dark:hover:text-white hover:scale-110 text-gray-600 hover:text-gray-700"/></a>
  </div>
  </>
)
}
export default Footer