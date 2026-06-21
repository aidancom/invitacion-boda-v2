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
    <div className="relative">
      <div className="absolute left-0 top-0 rotate-x-180">
        <img
          src="../img/flowers-corner.png"
          className="w-[150px] lg:w-[300px] m-[10px]"
        />
      </div>      
      <div className='bg-no-repeat bg-cover bg-fixed bg-center p-15 relative'>
        <div className='max-w-[1200px] m-auto'>
          <h3 className="text-4xl font-bold text-black text-center pb-5 font-[Allura]">¿Alguna sugerencia?</h3>
          <p className="text-center">Estamos abiertos a sugerencias para poner canciones. Si tienes alguna en mente, ¡es tu momento!</p>
          <form 
            className="shadow-2xl rounded-[20px] max-w-[500px] m-auto p-5 space-y-4 mt-5 bg-[#4C5C37bf]"
            onSubmit={handleSubmit((data) => submitSong(data))}
            >
            <fieldset className="flex flex-col">
              <label className={styledLabel}>
                Nombre de la cancion*
              </label>
              <input 
                type="text"
                name="songName"
                placeholder="Introduce el nombre de la canción"
                className={styledInputs}
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
              <label className={styledLabel}>
                Artista*
              </label>
              <input 
                type="text"
                name="artistName"
                placeholder="Introduce el artista de la canción"              
                className={styledInputs}
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
              <label className={styledLabel}>
                Album
              </label>
              <input 
                type="text"
                name="albumName"
                placeholder="Introduce el albúm de la canción (si lo sabes)"               
                className={styledInputs} 
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
                className="bg-[#4C5C37] text-white px-3 cursor-pointer p-1"
                />
            </div>

          </form>
        </div>
      </div>
      <div className="absolute right-0 bottom-0 rotate-y-180">
        <img
          src="../img/flowers-corner.png"
          className="w-[150px] lg:w-[300px] m-[10px]"
        />
      </div>        
    </div>

  )
}

export default SuggestSongs
