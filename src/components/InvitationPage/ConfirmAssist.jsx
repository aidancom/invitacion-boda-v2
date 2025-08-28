import { useInvitationStore } from "../../stores/useInvitationStore"



const ConfirmAssist = () => {

  const data = useInvitationStore(state => state.data)
  const { guest_family_information: guests } = data.guest_information

  return (
    <div className='bg-[#C3AA92] p-6'>
      <div className='max-w-[1200px] m-auto'>
        <h3 className="text-3xl font-bold text-white text-center pb-3">Y ahora...¡lo importante de verdad!</h3>
        <p className="text-white text-center">Necesitamos que {data.length == 1 ? 'confirmes' : 'confirmeis'} la asistencia (y un par de cosas mas jeje)</p>
        {guests.map(guest => (
          <p>{guest.name}</p>
        ))}
      </div>
    </div>
  )
}

export default ConfirmAssist
