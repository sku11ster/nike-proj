const Button = ({label,iconURL,backgroundColor,borderColor,textColor,fullWidth}) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 
    py-4 border font-montserrat text-1 leading-none 
    ${
      backgroundColor
      ? `${backgroundColor} ${textColor} ${borderColor}`
      : " text-white bg-coral-red border-coral-red "
    }
      rounded-full ${fullWidth && 'w-full'}`}>
        
        {label}
        {iconURL &&  <img className="ml-2 rounded-full w-6 h-6" src={iconURL} alt="arrow right icon" />
        }
    </button>
  )
}

export default Button