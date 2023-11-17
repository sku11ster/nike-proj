const Button = ({label,iconURL}) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-1 leading-none text-white bg-coral-red rounded-full">
        {label}
        <img className="ml-2 rounded-full w-6 h-6" src={iconURL} alt="arrow right icon" />
    </button>
  )
}

export default Button