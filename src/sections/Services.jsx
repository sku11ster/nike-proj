import ServiceCard from "../components/ServiceCard"
import {service} from "../constants"

const Services = () => {
  return (
   <section className="max-container flex justify-center flex-wrap gap-9">
          {service.map((service) => (
              <ServiceCard {...service} />
          ))}
    
   </section>
  )
}

export default Services