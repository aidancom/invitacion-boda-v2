import { useState, useEffect } from "react";

export default function Chronometer() {
  const weddingDay = new Date("2026-09-11T00:00:00").getTime();

  const [timeRemaining, setTimeRemaining] = useState(
    weddingDay - Date.now()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(weddingDay - Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, [weddingDay]);

  const calcularTiempo = (timeRemaining) => {
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) /
      (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeRemaining % (1000 * 60 * 60)) /
      (1000 * 60)
    );
    const seconds = Math.floor(
      (timeRemaining % (1000 * 60)) /
      1000
    );

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const handleClick = () => {
    const title = "Boda Aidan y Katherine";
    const location = "Betera";
    const start = "20260911T193000";
    const end = "20260912T030000";

    const url =
      `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${start}/${end}&location=${location}&sf=true&output=xml`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  const { days, hours, minutes, seconds } =
    calcularTiempo(timeRemaining);

  return (
    <section className="bg-[#F8F5EE] py-20 px-6">

      <div className="max-w-5xl mx-auto text-center">

        {/* Fecha */}

        <h2
          className="
            text-[#6E6A4D]
            leading-none
            font-light
          "
          style={{
            fontFamily: "Cormorant Garamond",
            fontSize: "clamp(3.5rem,9vw,8rem)"
          }}
        >
          11 de Septiembre
        </h2>

        {/* Año */}

        <p
          className="
            mt-4
            tracking-[0.5em]
            uppercase
            text-[#6E6A4D]
          "
          style={{
            fontFamily: "Cormorant Garamond",
            fontSize: "clamp(1rem,2vw,1.6rem)"
          }}
        >
          de 2026
        </p>

        {/* Adorno */}

        <div className="flex justify-center mt-8">
          <img
            src="../img/divider-countdown.svg"
            alt=""
            className="w-52 md:w-72"
          />
        </div>

        {/* Contador */}

        <div
          className="
            mt-12

            grid
            grid-cols-2
            md:grid-cols-4

            gap-y-10
            md:gap-x-14

            text-[#6E6A4D]
          "
        >

          <TimeBlock value={days} label="DÍAS" />
          <TimeBlock value={hours} label="HORAS" />
          <TimeBlock value={minutes} label="MINUTOS" />
          <TimeBlock value={seconds} label="SEGUNDOS" />

        </div>

        {/* Botón */}

        <button
          onClick={handleClick}
          className="
            mt-14

            border
            border-[#8E8A67]

            px-8
            py-3

            tracking-[0.15em]
            uppercase

            text-[#6E6A4D]

            hover:bg-[#EDE8DB]

            transition
            duration-300

            cursor-pointer
          "
          style={{
            fontFamily: "Cormorant Garamond"
          }}
        >
          Añadir al calendario
        </button>

      </div>

    </section>
  );
}

function TimeBlock({ value, label }) {
  return (
    <div className="flex flex-col items-center">

      <span
        style={{
          fontFamily: "Cormorant Garamond",
          fontSize: "clamp(2.8rem,6vw,4.5rem)"
        }}
      >
        {String(value).padStart(2, "0")}
      </span>

      <span
        className="
          mt-2
          tracking-[0.25em]
          text-xs
          md:text-sm
        "
      >
        {label}
      </span>

    </div>
  );
}