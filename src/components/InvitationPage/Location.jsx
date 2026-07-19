import { MapPinIcon } from "@heroicons/react/16/solid";

const Location = () => {
    return (
        <section className="relative bg-[#F8F5EE] py-24 px-6 overflow-hidden">

            {/* Marco */}
            <img
                src="../img/frame-location.svg"
                alt=""
                className="absolute inset-0 w-full h-full pointer-events-none select-none"
            />

            <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center my-[25px]">

                {/* Icono */}
                <MapPinIcon
                    className="w-12 h-12 text-[#74704E]"
                />

                {/* Título */}

                <h2
                    className="
                        mt-4
                        text-[#6D694A]
                        font-light
                    "
                    style={{
                        fontFamily: "Cormorant Garamond",
                        fontSize: "clamp(2.2rem,5vw,4rem)"
                    }}
                >
                    ¿Cuándo, dónde y a qué hora?
                </h2>

                {/* Adorno */}

                <img
                    src="../img/divider-location.svg"
                    className="w-40 md:w-56 mt-6"
                    alt=""
                />

                {/* Texto */}

                <p
                    className="
                        mt-8

                        max-w-2xl

                        leading-loose

                        text-[#5F5A44]

                        px-6
                    "
                    style={{
                        fontFamily: "Cormorant Garamond",
                        fontSize: "clamp(1.4rem,2vw,2rem)"
                    }}
                >
                    Se celebrará el día{" "}
                    <strong>11 de Septiembre de 2026</strong>,
                    <br />
                    en la Masía San Antonio de Benifaió,
                    <br />
                    a las <strong>19:30 pm.</strong>
                </p>

                {/* Botón */}

                <a
                    href="https://maps.app.goo.gl/Nbkc3oSeZ7F7GaFN8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                        mt-12

                        inline-flex

                        items-center

                        gap-3

                        rounded-full

                        bg-[#A9A176]

                        hover:bg-[#948C63]

                        transition

                        px-10

                        py-4

                        uppercase

                        tracking-[0.12em]

                        text-white
                    "
                    style={{
                        fontFamily: "Cormorant Garamond",
                        fontSize: "1.1rem"
                    }}
                >

                    <MapPinIcon className="w-6 h-6"/>

                    VER EN GOOGLE MAPS

                </a>

            </div>

        </section>
    );
};

export default Location;