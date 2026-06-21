import { MapPinIcon } from "@heroicons/react/16/solid"

const Location = () => {
  return (
    <div className="relative">
        <div className="absolute left-0 top-0 rotate-x-180">
          <img
            src="../img/flowers-corner.png"
            className="w-[150px] lg:w-[300px] m-[10px]"
          />
        </div>
        <div className='max-w-[1200px] m-auto flex items-center flex-col p-15 relative'>


        <MapPinIcon className="size-15 pb-3"/>
        <p className='text-center text-4xl font-bold pb-5 font-[Allura]'>¿Cuando, donde y a que hora?</p>
        <p>Se celebrara el dia <span className="font-bold">11 de Septiembre del 2026</span>, en la Masía San Antonio de Benifaio, a las <span className="font-bold">19:30 pm</span></p>
        <a 
          href="https://maps.app.goo.gl/Nbkc3oSeZ7F7GaFN8"
          target={"_blank"}
          className="text-white bg-[#4C5C37] rounded-3xl font-semibold px-10 py-2 mt-5 cursor-pointer" 
          >Ver en Google Maps</a>
      </div>
        <div className="absolute right-0 bottom-0 rotate-y-180">
          <img
            src="../img/flowers-corner.png"
            className="w-[150px] lg:w-[300px] m-[10px]"
          />
        </div>      
    </div>

  )
}

export default Location
