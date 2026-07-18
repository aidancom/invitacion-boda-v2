import { useForm } from "react-hook-form"
import { useInvitationStore } from "../../stores/useInvitationStore"
import { useState } from "react"

const SuggestSongs = () => {

  const {handleSubmit, register, reset, formState: {errors}} = useForm()
  const sendSong = useInvitationStore(state => state.sendSong)

  const [response, setResponse] = useState(null)

  const styledLabel = 'text-white font-bold pb-2'
  const styledInputs = 'bg-[#F9FAFB] px-1 py-1 rounded w-full'

  const submitSong = async (data) => {
    const song = await sendSong(data)
    setResponse(song)
    reset()
  }

  return (
    <section className="relative bg-[#F8F5EE] py-24 px-6 overflow-hidden">

        {/* Marco */}

        <img
            src="../img/frame-form.svg"
            className="absolute inset-0 w-full h-full pointer-events-none"
        />

        <div className="relative z-10 max-w-3xl mx-auto">

            {/* Divider */}

            <div className="flex justify-center">

                <img
                    src="../img/form-divider.svg"
                    className="w-28"
                />

            </div>

            {/* Título */}

            <h2
                className="
                    mt-8
                    text-center
                    tracking-[0.18em]
                    text-[#5E5945]
                "
                style={{
                    fontFamily:"Cormorant Garamond",
                    fontSize:"clamp(2.2rem,5vw,3.6rem)"
                }}
            >
                NUESTRA BANDA SONORA
            </h2>

            <div className="flex justify-center mt-6">

                <img
                    src="../img/form-divider-small.svg"
                    className="w-20"
                />

            </div>

            <div
                className="
                    mt-10

                    text-center

                    text-[#5F5A44]

                    leading-8

                    px-4
                "
                style={{
                    fontFamily:"Cormorant Garamond",
                    fontSize:"1.35rem"
                }}
            >

                <p>
                    No queremos arriesgarnos a que suene
                    esa canción que nadie pide nunca
                    <br />
                    (y que todos sufren en silencio).
                </p>

                <p className="mt-8">
                    Ayúdanos a crear la banda sonora
                    <br />
                    de un día que será inolvidable:
                </p>

                <p
                    className="mt-8 text-3xl"
                    style={{fontFamily:"Allura"}}
                >
                    buena compañía, buena comida y buena música...
                </p>

                <p
                    className="
                        mt-8
                        tracking-[0.18em]
                        uppercase
                    "
                >
                    ¡Prometemos bailarlas todas!
                </p>

            </div>

            <form
                onSubmit={handleSubmit((data)=>submitSong(data))}
                className="
                    mt-14

                    max-w-xl

                    mx-auto

                    space-y-8
                "
            >

                <fieldset>

                    <label className="block mb-2 tracking-[0.12em] text-[#5F5A44] uppercase text-sm">

                        Nombre de la canción *

                    </label>

                    <input

                        className="
                            w-full

                            border

                            border-[#C9C0B2]

                            bg-transparent

                            px-4

                            py-3

                            outline-none

                            focus:border-[#9A8E66]
                        "

                        placeholder="Esa canción que nunca falla"

                        {...register("songName",{

                            required:"Este campo es obligatorio"

                        })}

                    />

                    {errors.songName && (
                        <p className="text-red-600 mt-2 text-sm">
                            {errors.songName.message}
                        </p>
                    )}

                </fieldset>

                <fieldset>

                    <label className="block mb-2 tracking-[0.12em] text-[#5F5A44] uppercase text-sm">

                        Artista *

                    </label>

                    <input

                        className="
                            w-full

                            border

                            border-[#C9C0B2]

                            bg-transparent

                            px-4

                            py-3

                            outline-none

                            focus:border-[#9A8E66]
                        "

                        placeholder="El genio detrás de la canción"

                        {...register("artistName",{

                            required:"Este campo es obligatorio"

                        })}

                    />

                    {errors.artistName && (
                        <p className="text-red-600 mt-2 text-sm">
                            {errors.artistName.message}
                        </p>
                    )}

                </fieldset>

                <fieldset>

                    <label className="block mb-2 tracking-[0.12em] text-[#5F5A44] uppercase text-sm">

                        Álbum (opcional)

                    </label>

                    <input

                        className="
                            w-full

                            border

                            border-[#C9C0B2]

                            bg-transparent

                            px-4

                            py-3

                            outline-none

                            focus:border-[#9A8E66]
                        "

                        placeholder="Si aplica, el álbum donde encontrarla"

                        {...register("albumName")}

                    />

                </fieldset>

                <div className="flex justify-center pt-6">

                    <button

                        type="submit"

                        className="
                            bg-[#A7A078]

                            hover:bg-[#938B64]

                            transition

                            text-white

                            uppercase

                            tracking-[0.25em]

                            px-14

                            py-4
                        "

                    >

                        ENVIAR

                    </button>

                </div>

            </form>

        </div>

    </section>
  );
}

export default SuggestSongs
