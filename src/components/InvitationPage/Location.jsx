import { MapPinIcon } from "@heroicons/react/16/solid"

const Location = () => {
  return (
      <div className='max-w-[1200px] m-auto flex items-center flex-col p-15'>
        <MapPinIcon className="size-15 pb-3"/>
        <p className='text-center text-4xl font-bold pb-5 font-[DancingScript]'>¿Cuando, donde y a que hora?</p>
        <p>Se celebrara el dia <span className="font-bold">11 de Septiembre del 2026</span>, en la Masía San Antonio de Benifaio, a las <span className="font-bold">19:30 pm</span></p>
        <a 
          href="https://maps.app.goo.gl/Nbkc3oSeZ7F7GaFN8"
          target={"_blank"}
          className="text-white bg-[#C3AA92] rounded-3xl font-semibold px-10 py-2 mt-5 cursor-pointer" 
          >Ver en Google Maps</a>
      </div>
  )
}

export default Location
