import { arrowRight} from "../assets/icons"
import { bigShoe2, bigShoe3, shoe4, shoe6 } from "../assets/images"
import Button from "../components/Button"
import { popular_product } from "../constants"


const SuperQuality = () => {
  return (
    <section id="aboutus" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">

      <div className="flex flex-1 flex-col ">
        <h2 className=" font-palanquin capitalize text-4xl font-bold lg:max-w-lg ">
        We Provide You <span className="text-coral-red ">Super </span>
          <span className="text-coral-red ">
          Quality
          </span> Shoes
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
       <div className="mt-8">
       <Button label="Expand" />
       </div>
        
      </div>
      <div className="flex flex-1 justify-center items-center ">
        <img className="object-contain" src={shoe4} alt="shoe8"  width={520} height={530}/>
      </div>

    </section>
  )
}

export default SuperQuality