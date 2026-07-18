const events = [
    {
        time: "19:16",
        title: "CEREMONIA",
        image: "../img/rings.png"
    },
    {
        time: "19:46",
        title: "CÓCTEL",
        image: "../img/cocktail.png"
    },
    {
        time: "21:15",
        title: "CENA",
        image: "../img/dinner.png"
    },
    {
        time: "23:00",
        title: "FIESTA",
        image: "../img/party.png"
    }
];

const Slider = () => {

    return (

        <section className="bg-[#F8F5EE] py-24 px-6">

            <div className="max-w-7xl mx-auto">

                {/* Divider */}

                <div className="flex justify-center">

                    <img
                        src="../img/timeline-divider.svg"
                        className="w-60 md:w-80"
                    />

                </div>

                {/* Título */}

                <h2
                    className="
                        text-center

                        mt-8

                        text-[#6D694A]

                        font-semibold
                    "
                    style={{
                        fontFamily: "Cormorant Garamond",
                        fontSize: "clamp(3rem,6vw,5rem)"
                    }}
                >
                    EL GRAN DÍA
                </h2>

                {/* Timeline */}

                <div className="mt-20 relative">

                    {/* Línea */}

                    <div
                        className="
                            hidden
                            md:block

                            absolute

                            left-0
                            right-0

                            top-[245px]

                            h-[2px]

                            bg-[#8D8967]
                        "
                    />

                    <div
                        className="
                            grid

                            grid-cols-1

                            md:grid-cols-4

                            gap-20

                            relative
                        "
                    >

                        {events.map((item) => (

                            <div
                                key={item.title}
                                className="
                                    flex

                                    flex-col

                                    items-center

                                    text-center

                                    relative
                                "
                            >

                                <img
                                    src={item.image}
                                    className="
                                        w-44
                                        md:w-52
                                        lg:w-56

                                        object-contain
                                    "
                                />

                                <div
                                    className="
                                        hidden

                                        md:block

                                        w-5
                                        h-5

                                        rounded-full

                                        bg-[#5C5B3B]

                                        mt-10

                                        z-10
                                    "
                                />

                                <h3
                                    className="
                                        mt-6

                                        text-[#5C5B3B]
                                    "
                                    style={{
                                        fontFamily: "Cormorant Garamond",
                                        fontSize: "clamp(2rem,3vw,3rem)"
                                    }}
                                >
                                    {item.time}
                                </h3>

                                <p
                                    className="
                                        tracking-[0.12em]

                                        mt-2

                                        text-[#6D694A]
                                    "
                                    style={{
                                        fontFamily: "Cormorant Garamond",
                                        fontSize: "1.35rem"
                                    }}
                                >
                                    {item.title}
                                </p>

                            </div>

                        ))}

                    </div>

                </div>

                {/* Divider */}

                <div className="flex justify-center mt-24">

                    <img
                        src="../img/timeline-divider.svg"
                        className="w-60 md:w-80"
                    />

                </div>

            </div>

        </section>

    );

}

export default Slider;