import { BsFillTelephoneFill, BsFillEnvelopeFill } from "react-icons/bs"
const Footer = () => {
return(
  <>
  <div className="flex gap-12 text-4xl dark:text-cyan-400 justify-center pb-3">
    <a href="tel:704-796-4326"><BsFillTelephoneFill /></a>
    <a href='mailto:mckenzie.kenan.90@gmail.com'><BsFillEnvelopeFill /></a>
  </div>
  </>
)
}
export default Footer