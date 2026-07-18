const Head = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#fdfaf5] overflow-hidden -z-10">

      {/* Marco */}
      <div className="absolute inset-5 border border-[#9c9270] rounded-sm pointer-events-none"></div>

      {/* Decoración superior */}
      <img
        src="../img/branch-top.png"
        alt=""
        className="absolute top-0 left-0 w-[75%] md:w-[55%] lg:w-[45%] select-none pointer-events-none"
      />

      {/* Decoración lateral */}
      <img
        src="../img/branch-left.png"
        alt=""
        className="absolute left-0 top-0 h-full w-auto max-w-[170px] md:max-w-[220px] select-none pointer-events-none"
      />

      {/* Contenido */}
      <div className="relative z-10 flex flex-col items-center px-6 pt-24 pb-16">

<div className="relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center">
    <img
        src="../img/monogram.svg"
        alt="Monograma"
        className="w-full h-full"
    />

    <span
        className="absolute text-[#6f6b4d] pointer-events-none select-none"
        style={{
            fontFamily: "Allura",
            fontSize: "3rem",
            left: "44%",
            top: "47%",
            transform: "translate(-50%, -50%)",
            lineHeight: 1,
            zIndex: 2
        }}
    >
        K
    </span>

    <span
        className="absolute text-[#6f6b4d] pointer-events-none select-none"
        style={{
            fontFamily: "Allura",
            fontSize: "3rem",
            left: "56%",
            top: "53%",
            transform: "translate(-50%, -50%)",
            lineHeight: 1,
            zIndex: 3
        }}
    >
        A
    </span>
</div>

        {/* Texto */}
        <p className="mt-12 text-center uppercase tracking-[4px] text-[#555] text-xs md:text-sm">
          Tenemos el placer de
        </p>

        <p className="mt-2 text-center uppercase tracking-[4px] text-[#555] text-xs md:text-sm">
          Invitaros a nuestro enlace
        </p>

        {/* Nombres */}
        <h1
          className="mt-10 text-center text-[#555238]"
          style={{
            fontFamily: "Allura",
            fontSize: "clamp(3.2rem,8vw,6rem)"
          }}
        >
          Katherine E. Palomo
        </h1>

        <div
          className="my-2 text-[#555238]"
          style={{
            fontFamily: "Allura",
            fontSize: "clamp(2.5rem,6vw,4rem)"
          }}
        >
          y
        </div>

        <h1
          className="text-center text-[#555238]"
          style={{
            fontFamily: "Allura",
            fontSize: "clamp(3.2rem,8vw,6rem)"
          }}
        >
          Aidan Verdejo
        </h1>

        {/* Separador */}
        <img
          src="../img/divider.png"
          alt=""
          className="mt-10 w-48"
        />

        {/* Fecha */}
        <h3 className="mt-8 tracking-[3px] uppercase text-[#555] text-sm md:text-lg">
          13 de Septiembre de 2026
        </h3>

        {/* Masía */}
        <img
          src="../img/background-head.png"
          alt="Masía"
          className="mt-10 w-full max-w-5xl object-contain"
        />

        {/* Sello */}
        <img
          src="../img/wax.png"
          alt=""
          className="w-28 md:w-36 -mt-12 drop-shadow-xl"
        />

        {/* Texto inferior */}
        <h3
          className="mt-10 text-[#6b6547]"
          style={{
            fontFamily: "Allura",
            fontSize: "clamp(2rem,4vw,3rem)"
          }}
        >
          Desliza para descubrir
        </h3>

        {/* Flecha */}
        <svg
          className="mt-4 animate-bounce"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M6 9l6 6 6-6"
            stroke="#5f5b43"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

      </div>

    </section>
  );
};

export default Head;