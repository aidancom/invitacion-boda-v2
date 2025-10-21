import { useForm } from "react-hook-form"
import { useInvitationStore } from "../../stores/useInvitationStore"
import { useState } from "react"

const SuggestSongs = () => {

  const {handleSubmit, register, reset, formState: {errors}} = useForm()
  const sendSong = useInvitationStore(state => state.sendSong)

  const [response, setResponse] = useState(null)

  const submitSong = async (data) => {
    const song = await sendSong(data)
    setResponse(song)
    reset()
  }

  return (
    <div className='bg-no-repeat bg-cover bg-fixed bg-center p-15 relative'>
      <div className='max-w-[1200px] m-auto'>
        <h3 className="text-4xl font-bold text-black text-center pb-5 font-[DancingScript]">¿Alguna sugerencia?</h3>
        <p className="text-center">Estamos abiertos a sugerencias para poner canciones. Si tienes alguna en mente, ¡es tu momento!</p>
        <form 
          className="shadow-2xl rounded-[20px] max-w-[500px] m-auto p-5 space-y-4 mt-5"
          onSubmit={handleSubmit((data) => submitSong(data))}
          >
          <fieldset className="flex flex-col">
            <label>
              Nombre de la cancion*
            </label>
            <input 
              type="text"
              name="songName"
              placeholder="Introduce el nombre de la canción"
              className="border px-1"
              {...register('songName', {
                required: {
                  value: true,
                  message: 'Este campo es obligatorio'
                }
              })}
            />
            {errors?.songName?.message && <p>{errors?.songName?.message}</p>}            
          </fieldset>
          <fieldset className="flex flex-col">
            <label>
              Artista*
            </label>
            <input 
              type="text"
              name="artistName"
              placeholder="Introduce el artista de la canción"              
              className="border px-1"
              {...register('artistName', {
                required: {
                  value: true,
                  message: 'Este campo es obligatorio'
                }
              })}              
            />
            {errors?.artistName?.message && <p>{errors?.artistName?.message}</p>}
          </fieldset>
          <fieldset className="flex flex-col">
            <label>
              Album
            </label>
            <input 
              type="text"
              name="albumName"
              placeholder="Introduce el albúm de la canción (si lo sabes)"               
              className="border px-1" 
              {...register('albumName', {
                required: {
                  value: false,
                }
              })}                         
            />
          </fieldset>
          <div className="flex justify-end">
            <input 
              type="submit" 
              value="Enviar" 
              className="bg-[#C3AA92] text-white px-3 cursor-pointer p-1"
              />
          </div>

        </form>
      </div>
    </div>
  )
}

export default SuggestSongs
