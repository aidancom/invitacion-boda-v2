const Introduction = () => {
    return (
        <section
            className="
                relative
                w-full
                min-h-screen
                bg-[#fdfaf5]
                overflow-hidden

                flex
                items-center
                justify-center

                px-6
                py-16
                sm:py-20
                lg:py-32
            "
        >

            {/* Marco */}
            <img
                src="../img/frame-introduction.svg"
                alt=""
                className="
                    absolute
                    inset-3
                    sm:inset-5
                    lg:inset-8

                    w-[calc(100%-24px)]
                    h-[calc(100%-24px)]

                    sm:w-[calc(100%-40px)]
                    sm:h-[calc(100%-40px)]

                    object-fill
                    pointer-events-none
                    select-none
                "
            />

            {/* Flores izquierda */}
            <img
                src="../img/flowers-left.svg"
                alt=""
                className="
                    absolute
                    left-[-15px]
                    bottom-[-15px]

                    w-28
                    sm:w-36
                    md:w-52
                    lg:w-72

                    pointer-events-none
                    select-none
                "
            />

            {/* Flores derecha */}
            <img
                src="../img/flowers-right.svg"
                alt=""
                className="
                    absolute
                    right-[-15px]
                    top-[-15px]

                    w-28
                    sm:w-36
                    md:w-52
                    lg:w-72

                    pointer-events-none
                    select-none
                "
            />

            {/* Contenido */}
            <div
                className="
                    relative
                    z-10

                    flex
                    flex-col
                    items-center

                    w-full
                    max-w-3xl

                    text-center
                "
            >

                {/* Adorno */}
                <img
                    src="../img/divider-introduction.svg"
                    alt=""
                    className="
                        w-28
                        sm:w-36
                        md:w-44
                        lg:w-52
                    "
                />

                {/* Texto */}

                <p
                    className="
                        mt-8
                        md:mt-10

                        px-5
                        sm:px-10

                        text-[#505050]

                        leading-relaxed
                    "
                    style={{
                        fontFamily: "Cormorant Garamond",
                        fontSize: "clamp(1.7rem,4vw,2.8rem)"
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
                    className="
                        mt-10
                        md:mt-14

                        w-6
                        md:w-8

                        animate-bounce
                    "
                />

            </div>

        </section>
    );
};

export default Introduction;