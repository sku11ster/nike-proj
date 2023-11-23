
const PopularProductCard = ({imgURL,name,price}) => {
  return (
    <div className="flex flex-1 flex-col items-center w-full max-sm:w-full ">

        <img src={imgURL} alt={name} className="w-[280px] h-[280px]" />
        <div className="mt-8 flex justify-center w-full gap-2.5 ">
    
         
          
        </div>
        <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">{name}</h3>
        <p className="font-bold font-montserrat mt-2 text-2xl text-coral-red">{price}</p>
       
        <p className="font-montserrat text-xl leading-normal text-slate-gray">(4.8)</p>
        

    </div>
  )
}

export default PopularProductCard