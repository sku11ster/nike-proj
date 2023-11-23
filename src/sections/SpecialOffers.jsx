import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffers = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1 ">
        <img className="object-contain w-full" src={offer} width={780} height={680} />
      </div>

      <div className="flex flex-1 flex-col">
        <h2 className=" font-palanquin capitalize text-4xl font-bold lg:max-w-lg ">
          <span className="text-coral-red ">
          Speacil
          </span> Offer
        </h2>
       <p className="mt-4 lg:max-w-lg info-text">
        Discover stlyish Nike arrivals, quality comfort,
        and innovation for your active life.
       </p>
       <p className="mt-6 lg:max-w-lg info-text">
        Our shoes are designed to provide you with the best possible experience.
       </p>
       <p className="mt-2 lg:max-w-lg info-text">
        With our wide range of styles, colors, materials, and sizes, we have something for everyone.
       </p>
       <div className="mt-8 flex flex-wrap gap-4">
       <Button label="Shop Now" iconURL={arrowRight} />
       <Button label="Learn More" backgroundColor="bg-white" 
       borderColor="border-slate-gray" textColor="text-slate-gray" />
       </div>
        
      </div>
    </section>
  )
}

export default SpecialOffers