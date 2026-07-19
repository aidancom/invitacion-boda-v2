const Head = () => {
  return (
    <section className="relative w-full bg-[#f8f4ec] overflow-hidden -z-10">
      {/* Marco */}
      <div className="absolute inset-[6px] border border-[#9d9775] pointer-events-none z-20" />

      {/* Decoración floral superior izquierda */}
{/* Decoración floral superior izquierda */}
<img
  src="../img/branch-left-top.png"
  alt=""
  aria-hidden="true"
  className="
    absolute
    -top-2
    -left-3
    z-[25]
    w-[500px]
    sm:w-[430px]
    md:w-[950px]
    max-w-none
    h-auto
    pointer-events-none
    select-none
  "
/>

      {/* Contenido */}
      <div className="relative z-10 flex flex-col items-center px-7 pt-12 pb-6 sm:pt-16">
        {/* Logo */}
        <img
          src="../img/logo.png"
          alt="Logo de Katherine y Aidan"
          className="w-[72px] sm:w-[95px] h-auto"
        />

        {/* Introducción */}
        <div className="mt-7 text-center text-[#5d5a52]">
          <p className="uppercase text-[6px] sm:text-[8px] tracking-[0.16em] leading-relaxed">
            Tenemos el placer de
          </p>

          <p className="mt-[2px] uppercase text-[6px] sm:text-[8px] tracking-[0.16em] leading-relaxed">
            Invitaros a nuestro enlace
          </p>
        </div>

        {/* Nombres */}
        <div className="mt-4 flex flex-col items-center text-[#6d694b]">
          <h1
            className="text-center font-normal leading-[0.9]"
            style={{
              fontFamily: "'Allura', cursive",
              fontSize: "clamp(2.4rem, 10vw, 4.5rem)",
            }}
          >
            Katherine E. Palomo
          </h1>

          <span
            className="-my-1 leading-none"
            style={{
              fontFamily: "'Allura', cursive",
              fontSize: "clamp(1.6rem, 6vw, 2.5rem)",
            }}
          >
            y
          </span>

          <h1
            className="text-center font-normal leading-[0.9]"
            style={{
              fontFamily: "'Allura', cursive",
              fontSize: "clamp(2.4rem, 10vw, 4.5rem)",
            }}
          >
            Aidan Verdejo
          </h1>
        </div>

        {/* Separador */}
        <div className="mt-3 flex items-center justify-center text-[#827b59]">
          <span className="block h-px w-7 bg-[#aaa27c]" />
          <span className="mx-2 text-[8px]">◇</span>
          <span className="block h-px w-7 bg-[#aaa27c]" />
        </div>

        {/* Fecha */}
        <p className="mt-3 text-center uppercase text-[6px] sm:text-[8px] tracking-[0.15em] text-[#5c5a52]">
          13 de Septiembre de 2026
        </p>

        {/* Masía + sello superpuesto */}
        <div className="relative mt-5 w-[105%] max-w-[520px]">
          <img
            src="../img/masia-introduction.png"
            alt="Masía de Sant Antoni"
            className="w-full h-auto object-contain"
          />

          <img
            src="../img/sello.png"
            alt="Sello de la invitación"
            className="
              absolute
              left-1/2
              bottom-[-22px]
              -translate-x-1/2
              w-[78px]
              sm:w-[96px]
              h-auto
              object-contain
              drop-shadow-md
              z-20
            "
          />
        </div>

        <p
          className="mt-12 text-center text-[#706c50] leading-none"
          style={{
            fontFamily: "'Allura', cursive",
            fontSize: "clamp(1.15rem, 5vw, 1.8rem)",
          }}
        >
          Desliza para descubrir
        </p>

        {/* Flecha */}
        <svg
          className="mt-2 h-3 w-3 animate-bounce"
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