import { useState } from "react"
import { useInvitationStore } from "../../stores/useInvitationStore"



const ConfirmAssist = () => {

  const data = useInvitationStore(state => state.data)
  const { guest_family_information: guests } = data.guest_information

  const [updateGuest, setUpdateGuest] = useState({
    name: "",
    confirm: null,
    gluten: false,
    additional_information: ""
  });

  const handleConfirm = (guest) => {
    console.log(updateGuest)
    setUpdateGuest({
      name: guest.name,
      confirm: true,
      gluten: false,
      additional_information: ""
    });
  };

  return (
    <div className='bg-[url(../img/albufera.jpg)] bg-no-repeat bg-cover bg-fixed bg-center p-6'>
      <div className='max-w-[1200px] m-auto'>
        <h3 className="text-3xl font-bold text-white text-center pb-3">Y ahora...¡lo importante de verdad!</h3>
        <p className="text-white text-center">Necesitamos que {data.length == 1 ? 'confirmes' : 'confirmeis'} la asistencia (y un par de cosas mas jeje)</p>
        <div className="flex gap-10 justify-center pt-10">
        {guests.map(guest => (
          <div key={guest.id || guest.name} className="bg-white flex-1 max-w-[300px] text-center p-3">
            <form>
              <p>{guest.name}</p>

              <fieldset>
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
                  className="border"
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

            <div className="flex justify-between">
              <button type="button" onClick={() => handleConfirm(guest)}>Confirmar</button>
              <button type="button">No podré ir...</button>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default ConfirmAssist
