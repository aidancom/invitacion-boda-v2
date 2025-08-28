import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChampagneGlasses } from "@fortawesome/free-solid-svg-icons"

const MoreInformation = () => {
  return (
      <div className='max-w-[1200px] m-auto flex items-center flex-col p-6'>
        <FontAwesomeIcon className="text-3xl pb-3" icon={faChampagneGlasses}/>
        <p className='text-center text-2xl font-bold pb-3'>¡La fiesta esta en marcha!</p>
        <p>Y será una ocasion muy especial para disfrutar juntos y pasarlo genial, en un ambiente <span className="font-bold">solo para adultos</span> </p>
      </div>
  )
}

export default MoreInformation
