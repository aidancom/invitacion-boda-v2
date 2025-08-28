import { useState, useEffect } from "react";

export default function Chronometer() {
  const weddingDay = new Date("2026-09-11T00:00:00").getTime();
  const [timeRemaining, setTimeRemaining] = useState(weddingDay - Date.now())

  useEffect(() => {
    setInterval(() => setTimeRemaining(weddingDay - Date.now()), 1000)
  }, [weddingDay])

  const calcularTiempo = (timeRemaining) => {
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24))
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000)
    
    return {
      days,
      hours,
      minutes,
      seconds
    }
  }

  const handleClick = () => {
    const title = "Boda Aidan & Kathe";
    const location = "Betera";
    const start = "20260911T193000";
    const end   = "20260912T030000";

    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${start}/${end}&location=${location}&sf=true&output=xml`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const {days, hours, minutes, seconds} = calcularTiempo(timeRemaining)

  return (
    <div className="flex flex-col items-center p-6  bg-[#C3AA92]">
      <p className="text-white mb-2">TE ESPERAMOS EL DÍA</p>
      <h2 className="text-2xl font-semibold mb-6">11 de Septiembre</h2>

      {/* Contador */}
      <div className="flex gap-4 text-center text-2xl font-bold">
        <div>
          <p>{days}</p>
          <span className="text-sm font-normal text-white">Días</span>
        </div>
        <span>:</span>
        <div>
          <p>{String(hours).padStart(2, "0")}</p>
          <span className="text-sm font-normal text-white">Horas</span>
        </div>
        <span>:</span>
        <div>
          <p>{String(minutes).padStart(2, "0")}</p>
          <span className="text-sm font-normal text-white">Min</span>
        </div>
        <span>:</span>
        <div>
          <p>{String(seconds).padStart(2, "0")}</p>
          <span className="text-sm font-normal text-white">Seg</span>
        </div>
      </div>
      <button 
        className="text-[#C3AA92] bg-white rounded-3xl font-semibold px-10 py-2 mt-5 cursor-pointer" 
        onClick={handleClick}
        >Añadir a Google Calendar</button>
    </div>
  );
}