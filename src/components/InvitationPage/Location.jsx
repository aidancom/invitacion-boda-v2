import { MapPinIcon } from "@heroicons/react/16/solid"

const Location = () => {
  return (
      <div className='max-w-[1200px] m-auto flex items-center flex-col p-6'>
        <MapPinIcon className="size-15 pb-3"/>
        <p className='text-center text-2xl font-bold pb-3'>¿Cuando, donde y a que hora?</p>
        <p>Se celebrara el dia <span className="font-bold">11 de Septiembre del 2026</span>, en la Masía Vista Alegre, a las <span className="font-bold">19:30 pm</span></p>
        <a 
          href="https://www.google.com/maps/place/Mas%C3%ADa+Vistalegre+%7C+Bodas+y+Eventos+en+B%C3%A9tera,+Valencia/@39.596554,-0.4715207,17z/data=!3m1!4b1!4m6!3m5!1s0xd605cc27efac7f5:0x1ce7933a2d7aa7a1!8m2!3d39.5965499!4d-0.4689458!16s%2Fg%2F11bw64mmpj?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D"
          target={"_blank"}
          className="text-white bg-[#C3AA92] rounded-3xl font-semibold px-10 py-2 mt-5 cursor-pointer" 
          >Ver en Google Maps</a>
      </div>
  )
}

export default Location
