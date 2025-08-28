import { useInvitationStore } from "../stores/useInvitationStore"

const Invitiation = () => {

    const data = useInvitationStore(state => state.data)

    return (
        <div className="bg-white p-7 z-999">
            <h1 className="font-[DancingScript] text-[35px] text-center">Hola, {data.guest_information?.guest_name}</h1>
            <p className="pt-2">
                {data.guest_information?.guest_family == "Yes" ? 'Os' : 'Te'} queremos invitar a un evento muy especial y esta es {data.guest_information?.guest_family == "Yes" ? 'vuestra' : 'tu'} invitación
            </p>
            {data.guest_information?.guest_family_number ? (
                <p className="text-center pt-5 text-xl">
                    Nº de invitados: {data.guest_information?.guest_family_number + 1}
                </p>
            ) : (
                <p>
                    Nº de invitados: 1
                </p>
            )}
            <div className="flex justify-center items-center mt-5">
                <button 
                    className="bg-[#C3AA92] text-white text-center px-6 py-2 cursor-pointer"
                    onClick={() => useInvitationStore.setState({seeInvitationPage: true})}
                >
                    Ver Invitación
                </button>
            </div>

        </div>
    )
}

export default Invitiation