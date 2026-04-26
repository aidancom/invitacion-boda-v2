import { useState } from "react"
import { useInvitationStore } from "../stores/useInvitationStore"
import "../assets/css/envelope.css"
import { motion, AnimatePresence } from "framer-motion"

const Invitiation = () => {

    const data = useInvitationStore(state => state.data)

    const [open, setOpen] = useState(false);
    const [showCard, setShowCard] = useState(false);
    const [hideEnvelope, setHideEnvelope] = useState(false);


    return (
        <>
            <AnimatePresence>
                {!hideEnvelope && (
                    <motion.section
                        className="cssletter flex"
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        exit={{ 
                            opacity: 0, 
                            transition: { duration: 0.6 }
                        }}
                        onAnimationComplete={() => {
                            if (open) {
                            setTimeout(() => setShowCard(true), 100);
                            }
                        }}
                        >
                        <div className={`envelope ${open ? "active" : ""}`}>
                            <button 
                                className="heart" 
                                id="openEnvelope"
                                onClick={() => {
                                    setOpen(true);

                                    setTimeout(() => {
                                        setHideEnvelope(true);
                                    }, 2000);
                                }}
                                >
                            <div>
                                <img src="../img/sello.png" />
                                <span className="heart-text">Haz click</span>
                            </div>
                            </button>
                            <div className="envelope-flap"></div>
                            <div className="envelope-folds">
                            <div className="envelope-left"></div>
                            <div className="envelope-right"></div>
                            <div className="envelope-bottom"></div>
                            </div>
                        </div>
                    </motion.section>  
                )}
            </AnimatePresence>  
            <AnimatePresence>
                {showCard && (
                    <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1}}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white p-7 mx-5 z-999"
                    >
                    <h1 className="font-[DancingScript] text-[35px] text-center">
                        Hola, {data.guest_information?.guest_name}
                    </h1>

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
                    <div className="flex justify-center mt-5">
                        <button
                        className="bg-[#4C5C37] text-white px-6 py-2 rounded"
                        onClick={() => useInvitationStore.setState({seeInvitationPage: true})}
                        >
                        Ver Invitación
                        </button>
                    </div>
                    </motion.div>
                )}
            </AnimatePresence>            
        </>

    )
}

export default Invitiation