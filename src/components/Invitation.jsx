import { useState } from "react"
import { useInvitationStore } from "../stores/useInvitationStore"
import "../assets/css/envelope.css"

const Invitiation = () => {

    const data = useInvitationStore(state => state.data)

    const [open, setOpen] = useState(false);
    const [showCard, setShowCard] = useState(false)


    return (
        <>
            <section className={`cssletter ${showCard ? "hidden" : "flex"}`}>
            <div class={`envelope ${open ? "active" : ""}`}>
                <button 
                    class="heart" 
                    id="openEnvelope"
                    onClick={() => {
                        setOpen(true);

                        setTimeout(() => {
                            setShowCard(true);
                        }, 5000);
                    }}
                    >
                <div>
                    <img src="../img/sello.png" />
                    <span class="heart-text">Haz click</span>
                </div>
                </button>
                <div class="envelope-flap"></div>
                <div class="envelope-folds">
                <div class="envelope-left"></div>
                <div class="envelope-right"></div>
                <div class="envelope-bottom"></div>
                </div>
            </div>
            </section>    
            <div className={`bg-white p-7 z-999 mx-5 ${showCard ? "" : "hidden"}`}>
                <h1 className="font-[DancingScript] text-[35px] text-center">Hola, {data.guest_information?.guest_name}</h1>
                <p className="pt-2">
                    {data.guest_information?.guest_family == "Yes" ? 'Os' : 'Te'} queremos invitar a un evento muy especial y esta es {data.guest_information?.guest_family == "Yes" ? 'vuestra' : 'tu'} invitación
                </p>
                {data.guest_information?.guest_family_number ? (
                    <p className="text-center pt-5 text-xl">
                        Nº de invitados: {data.guest_information?.guest_family_number}
                    </p>
                ) : (
                    <p>
                        Nº de invitados: 1
                    </p>
                )}
                <div className="flex justify-center items-center mt-5">
                    <button 
                        className="bg-[#4C5C37] text-white text-center px-6 py-2 cursor-pointer rounded"
                        onClick={() => useInvitationStore.setState({seeInvitationPage: true})}
                    >
                        Ver Invitación
                    </button>
                </div>

            </div>                
        </>

    )
}

export default Invitiation