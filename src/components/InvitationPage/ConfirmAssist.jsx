import { useEffect, useState } from "react"
import { useInvitationStore } from "../../stores/useInvitationStore"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFaceLaugh, faFaceFrown } from "@fortawesome/free-regular-svg-icons"

import '../../assets/css/loader.css'



const ConfirmAssist = () => {

  const data = useInvitationStore(state => state.data)
  const updateGuestDB = useInvitationStore(state => state.updateGuestDB)
  const confirmLoader = useInvitationStore(state => state.confirmLoader)

  const { guest_family_information: guests } = data.guest_information

  const [updateGuest, setUpdateGuest] = useState({
    name: "",
    confirm: null,
    additional_information: ""
  });

  const handleConfirm = (guest) => {
    setUpdateGuest(prev => {
      const next = {
        ...prev,
        name: guest.name,
        confirm: "yes"
      };

      updateGuestDB(next, guest);
      return next;
    });
  };

  const handleReject = (guest) => {
    setUpdateGuest(prev => {
      const next = {
        ...prev,
        name: guest.name,
        confirm: "no"
      };
      
      updateGuestDB(next, guest);
      return next;
    });
  };

  return (
    <div className='bg-[url(../img/albufera.jpg)] bg-no-repeat bg-cover bg-fixed bg-center p-15 relative'>
      <div className="bg-[#00000042] w-full h-full absolute top-0 left-0"></div>
      <div className='max-w-[1200px] m-auto z-999 relative'>
        <h3 className="text-4xl font-bold text-white text-center pb-3">Y ahora...<span className="font-[DancingScript]">¡lo importante de verdad!</span></h3>
        <p className="text-white text-center">Necesitamos que {data.length == 1 ? 'confirmes' : 'confirmeis'} la asistencia (y un par de cosas mas jeje)</p>
        <div className="flex gap-10 justify-center pt-10 flex-col items-center lg:flex-row">
        {guests.map(guest => (
          <div key={guest.id || guest.name} className="bg-white flex-1 max-w-[300px] text-center px-6 py-3 relative rounded">
            {guest.confirm !== 'pending' && (
              <div className="bg-[#ffffff6e] w-full h-full absolute flex justify-center items-center top-0 left-0">
                  <div className="bg-white m-5 p-3 border">
                    {guest.confirm == 'yes' ? (
                      <>
                        <FontAwesomeIcon icon={faFaceLaugh}/>
                        <p>Gracias por acompañarnos en este momento tan especial</p>
                      </>
                    ) :  (
                      <>
                        <FontAwesomeIcon icon={faFaceFrown}/>
                        <p>Vaya... Bueno, si cambias de opinion, ¡contacta con nosotros lo antes posible!</p>
                      </>
                    )}
                  </div>
              </div>
            )}

            <form className="space-y-3 py-3">
              <p className="font-bold rounded bg-[#C3AA92] text-white py-1">{guest.name}</p>

              <fieldset>
                <label>¿Alguna alergia o intolerancia?</label>
                <textarea
                  className="w-full mt-4 px-2 bg-gray-50 rounded border border-gray-100"
                  name="additional_information"
                  placeholder="Introduce las intolerancias o alergias que tengas"
                  value={updateGuest.name === guest.name ? updateGuest.additional_information : ""}
                  onChange={(e) => setUpdateGuest(prev => (
                    prev.name === guest.name
                      ? { ...prev, additional_information: e.target.value }
                      : { name: guest.name, confirm: prev.confirm, additional_information: e.target.value }
                  ))}
                />
              </fieldset>
              <div className="flex justify-between mt-4">
                <button 
                  type="button" 
                  className="bg-[#C3AA92] text-white px-3 cursor-pointer py-1 rounded"
                  onClick={() => handleConfirm(guest)}
                  >Confirmar</button>
                <button 
                  type="button" 
                  className="bg-red-500 text-white px-3 cursor-pointer py-1 rounded"
                  onClick={() => handleReject(guest)}
                  >Rechazar</button>
              </div>              
            </form>


          </div>
        ))}
        </div>
      </div>
      {confirmLoader && (
        <div className="bg-[#ffffff96] w-full h-full absolute top-0 left-0 flex justify-center items-center z-99999">
          <div class="loader"></div>
        </div>
      )}

    </div>
  )
}

export default ConfirmAssist
