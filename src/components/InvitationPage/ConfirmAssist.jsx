import { useState } from "react";
import { useInvitationStore } from "../../stores/useInvitationStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFaceLaugh,
  faFaceFrown,
} from "@fortawesome/free-regular-svg-icons";

import "../../assets/css/loader.css";

const ConfirmAssist = () => {
  const data = useInvitationStore((state) => state.data);
  const updateGuestDB = useInvitationStore((state) => state.updateGuestDB);
  const confirmLoader = useInvitationStore(
    (state) => state.confirmLoader
  );

  const { guest_family_information: guests } =
    data.guest_information;

  const [updateGuest, setUpdateGuest] = useState({
    name: "",
    confirm: null,
    additional_information: "",
  });

  const handleConfirm = (guest) => {
    const next = {
      name: guest.name,
      confirm: "yes",
      additional_information: updateGuest.additional_information,
    };

    updateGuestDB(next, guest);

    setUpdateGuest({
      name: "",
      confirm: null,
      additional_information: "",
    });
  };

  const handleReject = (guest) => {
    const next = {
      name: guest.name,
      confirm: "no",
      additional_information: updateGuest.additional_information,
    };

    updateGuestDB(next, guest);

    setUpdateGuest({
      name: "",
      confirm: null,
      additional_information: "",
    });
  };

return (
  <section
    className="
      relative
      w-full
      overflow-hidden
      bg-[#f8f0e3]
      px-4
      py-5
      sm:px-7
      sm:py-8
    "
  >
{/* Marco */}
<div
  aria-hidden="true"
  className="
    pointer-events-none
    absolute
    inset-[12px]
    z-[20]
    border
    border-[#b89a54]
    sm:inset-[18px]
  "
/>
    {/* Detalles de las esquinas */}
    <span
      aria-hidden="true"
      className="
        pointer-events-none
        absolute
        left-[7px]
        top-[2px]
        z-[6]
        text-[22px]
        text-[#b89a54]
        sm:left-[12px]
        sm:top-[7px]
      "
    >
      ❧
    </span>

    <span
      aria-hidden="true"
      className="
        pointer-events-none
        absolute
        right-[7px]
        top-[2px]
        z-[6]
        scale-x-[-1]
        text-[22px]
        text-[#b89a54]
        sm:right-[12px]
        sm:top-[7px]
      "
    >
      ❧
    </span>

    <span
      aria-hidden="true"
      className="
        pointer-events-none
        absolute
        bottom-[2px]
        left-[7px]
        z-[6]
        rotate-180
        text-[22px]
        text-[#b89a54]
        sm:bottom-[7px]
        sm:left-[12px]
      "
    >
      ❧
    </span>

    <span
      aria-hidden="true"
      className="
        pointer-events-none
        absolute
        bottom-[2px]
        right-[7px]
        z-[6]
        rotate-180
        scale-x-[-1]
        text-[22px]
        text-[#b89a54]
        sm:bottom-[7px]
        sm:right-[12px]
      "
    >
      ❧
    </span>

   {/* Rama superior derecha */}
<img
  src="../img/branch-top-confirm.webp"
  alt=""
  aria-hidden="true"
  className="
    pointer-events-none
    absolute
    right-[8px]
    top-[40px]
    z-[6]
    w-[125px]
    select-none
    object-contain
    sm:right-[14px]
    sm:top-[48px]
    sm:w-[170px]
    md:w-[210px]
  "
/>

{/* Rama inferior izquierda */}
<img
  src="../img/branch-top-confirm.webp"
  alt=""
  aria-hidden="true"
  className="
    pointer-events-none
    absolute
    bottom-[-15px]
    left-[8px]
    z-[6]
    w-[135px]
    rotate-180
    select-none
    object-contain
    sm:bottom-[52px]
    sm:left-[14px]
    sm:w-[180px]
    md:w-[220px]
  "
/>

    {/* Contenido */}
    <div
      className="
        relative
        z-10
        mx-auto
        flex
        w-full
        max-w-[900px]
        flex-col
        items-center
        px-5
        pb-14
        pt-14
        sm:px-12
        sm:pb-20
        sm:pt-16
        md:px-20
      "
    >
        {/* Adorno superior */}
        <div className="flex items-center justify-center text-[#b5974e]">
          <span className="h-px w-12 bg-[#b5974e] sm:w-20" />
          <span className="mx-3 text-lg leading-none">✦</span>
          <span className="h-px w-12 bg-[#b5974e] sm:w-20" />
        </div>

        {/* Título */}
        <h2
          className="
            mt-7
            text-center
            uppercase
            tracking-[0.16em]
            text-[#677054]
          "
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(1.7rem, 6vw, 2.8rem)",
            fontWeight: 500,
          }}
        >
          Pensando en vosotros
        </h2>

        {/* Separador pequeño */}
        <div className="mt-4 flex items-center justify-center">
          <span className="h-px w-10 bg-[#c7a75b]" />
          <span className="mx-3 text-sm text-[#c7a75b]">♥</span>
          <span className="h-px w-10 bg-[#c7a75b]" />
        </div>

        {/* Introducción */}
        <p
          className="
            mt-5
            max-w-[580px]
            text-center
            leading-[1.55]
            tracking-[0.03em]
            text-[#70745c]
          "
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(1.05rem, 3.7vw, 1.35rem)",
          }}
        >
          Para nosotros lo más importante es que disfrutéis de este día
          con total tranquilidad.
        </p>

        <div className="mt-5 flex items-center">
          <span className="h-px w-8 bg-[#c7a75b]" />
          <span className="mx-2 text-[8px] text-[#c7a75b]">◆</span>
          <span className="h-px w-8 bg-[#c7a75b]" />
        </div>

        <p
          className="
            mt-5
            max-w-[620px]
            text-center
            leading-[1.5]
            tracking-[0.025em]
            text-[#70745c]
          "
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(1rem, 3.5vw, 1.25rem)",
          }}
        >
          Antes de confirmar vuestra asistencia, os pedimos que respondáis
          unas breves preguntas para ayudarnos a preparar cada detalle,
          incluidas alergias alimentarias, intolerancias o cualquier
          necesidad especial.
        </p>

        {/* Invitados */}
        <div
          className="
            mt-9
            grid
            w-full
            grid-cols-1
            gap-7
            md:grid-cols-2
          "
        >
          {guests.map((guest) => (
            <article
              key={guest.id || guest.name}
              className="
                relative
                overflow-hidden
                border
                border-[#b39a59]
                bg-[#fbf6ed]
                px-5
                py-5
                shadow-[0_8px_22px_rgba(91,72,35,0.08)]
              "
            >
              {/* Estado confirmado/rechazado */}
              {guest.confirm !== "pending" && (
                <div
                  className="
                    absolute
                    inset-0
                    z-30
                    flex
                    items-center
                    justify-center
                    bg-[#f8f0e3]/95
                    p-5
                  "
                >
                  <div
                    className="
                      w-full
                      border
                      border-[#b39a59]
                      bg-[#fbf6ed]
                      px-5
                      py-7
                      text-center
                      text-[#666b55]
                    "
                  >
                    <FontAwesomeIcon
                      icon={
                        guest.confirm === "yes"
                          ? faFaceLaugh
                          : faFaceFrown
                      }
                      className="mb-3 text-2xl text-[#a98d43]"
                    />

                    <p
                      className="leading-relaxed"
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "1.15rem",
                      }}
                    >
                      {guest.confirm === "yes"
                        ? "Gracias por acompañarnos en este momento tan especial."
                        : "Vaya... Si cambias de opinión, contacta con nosotros lo antes posible."}
                    </p>
                  </div>
                </div>
              )}

              <form className="relative z-10">
                {/* Nombre */}
                <div
                  className="
                    border
                    border-[#c7ad6b]
                    bg-[#989f7c]
                    px-4
                    py-2
                    text-center
                    uppercase
                    tracking-[0.1em]
                    text-[#fffaf0]
                    shadow-[inset_0_0_0_2px_rgba(245,226,168,0.25)]
                  "
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.1rem",
                  }}
                >
                  {guest.name}
                </div>

                {/* Información adicional */}
                <fieldset className="mt-5">
                  <label
                    className="
                      block
                      text-center
                      leading-snug
                      text-[#666b55]
                    "
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "1.1rem",
                    }}
                  >
                    ¿Alguna alergia, intolerancia o necesidad especial?
                  </label>

                  <textarea
                    className="
                      mt-4
                      min-h-[100px]
                      w-full
                      resize-none
                      border
                      border-[#c8b67f]
                      bg-[#fffaf1]
                      px-3
                      py-3
                      text-[#57594e]
                      outline-none
                      transition
                      placeholder:text-[#999583]
                      focus:border-[#8d946e]
                      focus:ring-1
                      focus:ring-[#8d946e]
                    "
                    name="additional_information"
                    placeholder="Introduce aquí las intolerancias, alergias o cualquier información importante"
                    value={
                      updateGuest.name === guest.name
                        ? updateGuest.additional_information
                        : ""
                    }
                    onChange={(e) =>
                      setUpdateGuest((prev) =>
                        prev.name === guest.name
                          ? {
                              ...prev,
                              additional_information: e.target.value,
                            }
                          : {
                              name: guest.name,
                              confirm: prev.confirm,
                              additional_information: e.target.value,
                            }
                      )
                    }
                  />
                </fieldset>

                {/* Botones */}
                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    className="
                      flex-1
                      cursor-pointer
                      border
                      border-[#b69a51]
                      bg-[#969d7a]
                      px-4
                      py-2.5
                      uppercase
                      tracking-[0.08em]
                      text-[#fffaf0]
                      transition
                      hover:bg-[#858d6a]
                      focus:outline-none
                      focus:ring-2
                      focus:ring-[#b69a51]
                      focus:ring-offset-2
                      focus:ring-offset-[#fbf6ed]
                    "
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                    }}
                    onClick={() => handleConfirm(guest)}
                  >
                    Confirmar asistencia
                  </button>

                  <button
                    type="button"
                    className="
                      flex-1
                      cursor-pointer
                      border
                      border-[#b69a51]
                      bg-transparent
                      px-4
                      py-2.5
                      uppercase
                      tracking-[0.08em]
                      text-[#7c765f]
                      transition
                      hover:bg-[#eee4d2]
                      focus:outline-none
                      focus:ring-2
                      focus:ring-[#b69a51]
                      focus:ring-offset-2
                      focus:ring-offset-[#fbf6ed]
                    "
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                    }}
                    onClick={() => handleReject(guest)}
                  >
                    No podré asistir
                  </button>
                </div>
              </form>
            </article>
          ))}
        </div>

        {/* Fecha límite */}
        <div className="mt-9 text-center">
          <span className="text-[#b79747]">♥</span>

          <p
            className="mt-2 italic text-[#77745f]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(1rem, 3vw, 1.25rem)",
            }}
          >
            Antes del 25 de agosto
          </p>
        </div>
      </div>

      {/* Loader */}
      {confirmLoader && (
        <div
          className="
            absolute
            inset-0
            z-[99999]
            flex
            items-center
            justify-center
            bg-[#fffaf0]/80
          "
        >
          <div className="loader" />
        </div>
      )}
    </section>
  );
};

export default ConfirmAssist;