const Head = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#f8f4ec] overflow-hidden -z-10">
      {/* Marco exterior */}
      <div className="absolute inset-[10px] sm:inset-4 border border-[#9d9775] pointer-events-none z-20" />

      {/* Esquinas decorativas del marco */}
      <span className="absolute top-[7px] left-[7px] z-20 text-[#9d9775] text-xl leading-none">
        ❧
      </span>
      <span className="absolute top-[7px] right-[7px] z-20 text-[#9d9775] text-xl leading-none scale-x-[-1]">
        ❧
      </span>
      <span className="absolute bottom-[7px] left-[7px] z-20 text-[#9d9775] text-xl leading-none rotate-180">
        ❧
      </span>
      <span className="absolute bottom-[7px] right-[7px] z-20 text-[#9d9775] text-xl leading-none rotate-180 scale-x-[-1]">
        ❧
      </span>

      {/* Rama superior izquierda */}
      <img
        src="../img/branch-top.png"
        alt=""
        aria-hidden="true"
        className="
          absolute top-0 left-0 z-10
          w-[82%] max-w-[430px]
          sm:w-[60%] sm:max-w-[520px]
          object-contain object-left-top
          select-none pointer-events-none
        "
      />

      {/* Rama lateral izquierda */}
      <img
        src="../img/branch-left.png"
        alt=""
        aria-hidden="true"
        className="
          absolute top-0 left-0 z-[9]
          h-full w-auto
          max-w-[115px]
          sm:max-w-[155px]
          md:max-w-[190px]
          object-cover object-left
          select-none pointer-events-none
        "
      />

      {/* Contenido principal */}
      <div
        className="
          relative z-10
          flex min-h-screen flex-col items-center
          px-9 sm:px-12
          pt-20 sm:pt-24
          pb-8
        "
      >
        {/* Logo */}
        <img
          src="../img/logo.png"
          alt="Logo de Katherine y Aidan"
          className="
            mt-1
            w-[88px]
            sm:w-[108px]
            md:w-[120px]
            h-auto object-contain
          "
        />

        {/* Introducción */}
        <div className="mt-10 sm:mt-12 text-center text-[#5d5a52]">
          <p
            className="
              uppercase
              text-[7px] sm:text-[9px]
              tracking-[0.14em]
              leading-relaxed
            "
          >
            Tenemos el placer de
          </p>

          <p
            className="
              mt-1 uppercase
              text-[7px] sm:text-[9px]
              tracking-[0.14em]
              leading-relaxed
            "
          >
            Invitaros a nuestro enlace
          </p>
        </div>

        {/* Nombres */}
        <div className="mt-5 sm:mt-7 flex flex-col items-center text-[#6d694b]">
          <h1
            className="text-center font-normal leading-[0.95]"
            style={{
              fontFamily: "'Allura', cursive",
              fontSize: "clamp(2.5rem, 9vw, 4.7rem)",
            }}
          >
            Katherine E. Palomo
          </h1>

          <span
            className="my-1 sm:my-2 leading-none"
            style={{
              fontFamily: "'Allura', cursive",
              fontSize: "clamp(1.7rem, 5vw, 2.8rem)",
            }}
          >
            y
          </span>

          <h1
            className="text-center font-normal leading-[0.95]"
            style={{
              fontFamily: "'Allura', cursive",
              fontSize: "clamp(2.5rem, 9vw, 4.7rem)",
            }}
          >
            Aidan Verdejo
          </h1>
        </div>

        {/* Separador ornamental */}
        <div className="mt-5 flex items-center justify-center text-[#827b59]">
          <span className="block h-px w-9 bg-[#aaa27c]" />
          <span className="mx-2 text-[11px]">◇</span>
          <span className="block h-px w-9 bg-[#aaa27c]" />
        </div>

        {/* Fecha */}
        <p
          className="
            mt-4 sm:mt-5
            text-center uppercase
            text-[7px] sm:text-[9px]
            tracking-[0.17em]
            text-[#5c5a52]
          "
        >
          13 de Septiembre de 2026
        </p>

        {/* Masía */}
        <div className="relative mt-3 sm:mt-5 w-[calc(100%+4.5rem)] sm:w-[calc(100%+6rem)]">
          <img
            src="../img/masia-introduction.png"
            alt="Masía de Sant Antoni"
            className="
              mx-auto
              w-full max-w-[700px]
              h-auto object-contain
              select-none
            "
          />
        </div>

        {/* Sello superpuesto */}
        <img
          src="../img/sello.png"
          alt="Sello de la invitación"
          className="
            relative z-20
            -mt-8 sm:-mt-12
            w-[76px] sm:w-[96px] md:w-[108px]
            h-auto object-contain
            drop-shadow-[0_5px_5px_rgba(64,48,24,0.24)]
          "
        />

        {/* Texto inferior */}
        <p
          className="mt-5 sm:mt-7 text-center text-[#706c50] leading-none"
          style={{
            fontFamily: "'Allura', cursive",
            fontSize: "clamp(1.25rem, 4vw, 2rem)",
          }}
        >
          Desliza para descubrir
        </p>

        {/* Flecha */}
        <svg
          className="mt-3 h-4 w-4 animate-bounce"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M7 10l5 5 5-5"
            stroke="#777155"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
};

export default Head;