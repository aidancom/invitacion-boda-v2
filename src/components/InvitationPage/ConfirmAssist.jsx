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
    gluten: false,
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
    <div className='bg-[url(../img/albufera.jpg)] bg-no-repeat bg-cover bg-fixed bg-center p-6 relative'>
      <div className='max-w-[1200px] m-auto'>
        <h3 className="text-3xl font-bold text-white text-center pb-3">Y ahora...¡lo importante de verdad!</h3>
        <p className="text-white text-center">Necesitamos que {data.length == 1 ? 'confirmes' : 'confirmeis'} la asistencia (y un par de cosas mas jeje)</p>
        <div className="flex gap-10 justify-center pt-10">
        {guests.map(guest => (
          <div key={guest.id || guest.name} className="bg-white flex-1 max-w-[300px] text-center px-6 py-3 relative">
            {guest.confirm && (
              <div className="bg-[#ffffff6e] w-full h-full absolute flex justify-center items-center top-0 left-0">
                  <div className="bg-white m-5 p-3 border">
                    {guest.confirm == 'yes' ? (
                      <>
                        <FontAwesomeIcon icon={faFaceLaugh}/>
                        <p>Gracias por acompañarnos en este momento tan especial</p>
                      </>
                    ) : (
                      <>
                        <FontAwesomeIcon icon={faFaceFrown}/>
                        <p>Vaya... Bueno, si cambias de opinion, ¡contacta con nosotros lo antes posible!</p>
                      </>
                    )}
                  </div>
              </div>
            )}

            <form>
              <p className="font-bold">{guest.name}</p>

              <fieldset className="flex justify-between py-3">
                <label>¿Intolerancia al Gluten?</label>
                <input
                  type="checkbox"
                  name="gluten"
                  checked={updateGuest.name === guest.name ? !!updateGuest.gluten : false}
                  onChange={(e) => setUpdateGuest(prev => (
                    prev.name === guest.name
                      ? { ...prev, gluten: e.target.checked }
                      : { name: guest.name, confirm: prev.confirm, gluten: e.target.checked, additional_information: "" }
                  ))}
                />
              </fieldset>

              <fieldset>
                <label>¿Alguna alergia o intolerancia?</label>
                <textarea
                  className="border w-full mt-1"
                  name="additional_information"
                  value={updateGuest.name === guest.name ? updateGuest.additional_information : ""}
                  onChange={(e) => setUpdateGuest(prev => (
                    prev.name === guest.name
                      ? { ...prev, additional_information: e.target.value }
                      : { name: guest.name, confirm: prev.confirm, gluten: false, additional_information: e.target.value }
                  ))}
                />
              </fieldset>
            </form>

            <div className="flex justify-between mt-4">
              <button 
                type="button" 
                className="bg-[#C3AA92] text-white px-3 cursor-pointer"
                onClick={() => handleConfirm(guest)}
                >Confirmar</button>
              <button 
                type="button" 
                className="bg-red-500 text-white px-3 cursor-pointer"
                onClick={() => handleReject(guest)}
                >No podré ir...</button>
            </div>
          </div>
        ))}
        </div>
      </div>
      {confirmLoader && (
        <div className="bg-[#ffffff96] w-full h-full absolute top-0 left-0 flex justify-center items-center">
          <div class="loader"></div>
        </div>
      )}

    </div>
  )
}

export default ConfirmAssist
