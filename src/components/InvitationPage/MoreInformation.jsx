import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChampagneGlasses } from "@fortawesome/free-solid-svg-icons"

const MoreInformation = () => {
  return (
    <div className="relative">
         <div className="absolute left-0 bottom-0">
        <img
          src="../img/flowers-corner.png"
          className="w-[150px] lg:w-[300px] m-[10px]"
        />
      </div>
      <div className='max-w-[1200px] m-auto flex items-center flex-col p-15'>
        <FontAwesomeIcon className="text-3xl pb-3" icon={faChampagneGlasses}/>
        <p className='text-center text-4xl font-bold pb-5 font-[Allura]'>¡La fiesta esta en marcha!</p>
        <p>Y será una ocasion muy especial para disfrutar juntos y pasarlo genial, en un ambiente <span className="font-bold">solo para adultos</span> </p>
      </div> 
      <div className="absolute right-0 top-0 rotate-180">
        <img
          src="../img/flowers-corner.png"
          className="w-[150px] lg:w-[300px] m-[10px]"
        />
      </div>              
    </div>

  )
}

export default MoreInformation
