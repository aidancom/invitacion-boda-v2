const Introduction = () => {
  return (
    <section
      className="
        relative
        w-full
        bg-[#fdfaf5]
        overflow-hidden

        px-5
        py-10
        sm:px-7
        sm:py-12
        lg:py-16
      "
    >
      {/* Marco */}
      <img
        src="../img/frame-introduction.svg"
        alt=""
        aria-hidden="true"
        className="
          absolute
          inset-3
          sm:inset-4
          lg:inset-5

          w-[calc(100%-24px)]
          h-[calc(100%-24px)]

          sm:w-[calc(100%-32px)]
          sm:h-[calc(100%-32px)]

          lg:w-[calc(100%-40px)]
          lg:h-[calc(100%-40px)]

          object-fill
          pointer-events-none
          select-none
        "
      />

      {/* Flores izquierda */}
      <img
        src="../img/flowers-left.svg"
        alt=""
        aria-hidden="true"
        className="
          absolute
          left-[-10px]
          bottom-[-8px]

          w-24
          sm:w-32
          md:w-40
          lg:w-52

          pointer-events-none
          select-none
        "
      />

      {/* Flores derecha */}
      <img
        src="../img/flowers-right.svg"
        alt=""
        aria-hidden="true"
        className="
          absolute
          right-[-10px]
          top-[-8px]

          w-24
          sm:w-32
          md:w-40
          lg:w-52

          pointer-events-none
          select-none
        "
      />

      {/* Contenido */}
      <div
        className="
          relative
          z-10

          mx-auto
          flex
          flex-col
          items-center

          w-full
          max-w-2xl

          py-8
          sm:py-10
          md:py-12

          text-center
        "
      >
        {/* Adorno */}
        <img
          src="../img/divider-introduction.svg"
          alt=""
          aria-hidden="true"
          className="
            w-24
            sm:w-28
            md:w-32
            lg:w-36
          "
        />

        {/* Texto */}
        <p
          className="
            mt-6
            sm:mt-7

            px-3
            sm:px-6

            text-[#505050]
            leading-[1.5]
          "
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(1.45rem, 4vw, 2.4rem)",
          }}
        >
          Hay momentos que se viven
          <br />
          una sola vez, pero permanecen
          <br />
          para siempre en el corazón.
        </p>

        {/* Flecha */}
        <img
          src="../img/arrow.svg"
          alt=""
          aria-hidden="true"
          className="
            mt-7
            sm:mt-9

            w-5
            md:w-6

            animate-bounce
          "
        />
      </div>
    </section>
  );
};

export default Introduction;