import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useInvitationStore } from "../stores/useInvitationStore"
import '../assets/css/loader_2.css'
import { toast } from "react-toastify"

const CodeVerification = () => {

    const {register, handleSubmit, watch, formState: {errors}} = useForm()
    const [enableButton, setEnableButton] = useState(false)
    const codeComprobation = watch("code", "")
    const getGuestsData = useInvitationStore(state => state.getGuestsData)
    const verificationLoader = useInvitationStore(state => state.verificationLoader)
    const url = new URLSearchParams(document.location.search)
    const code = url.get("invCode")

    useEffect(() => {
        codeComprobation !== "" && codeComprobation !== null ? setEnableButton(true) : setEnableButton(false);
    }, [codeComprobation])


    const verifyCode = (data) => {
        code == codeComprobation ? getGuestsData(data) : toast.error("Código incorrecto")
    }

    return (
        <div className="bg-white p-7 z-999 relative mx-5">
            {verificationLoader &&
                <div className="absolute bg-[#00000047] h-full w-full top-0 left-0 z-9999 flex items-center justify-center">
                    <div class="loader_2"></div>
                </div>      
            }
            <h1 className="font-[Allura] text-[35px] text-center">Hola</h1>
            <p className="pt-2 pb-5">Para poder continuar, introduce debajo el código recibido por WhatsApp</p>
            <form 
                className="flex flex-col"
                onSubmit={handleSubmit((data) => verifyCode(data))}
            >


                <input 
                    className="border p-1 rounded"    
                    type="text" 
                    placeholder="Introduce el código aquí"
                    name="code"
                    {...register('code', {
                        required: {
                            value: true,
                            message: 'Este campo es obligatorio'
                        }
                    })}
                    
                />
                <button 
                    className="cursor-pointer bg-[#4C5C37] text-white mt-3 p-2 rounded disabled:opacity-50 disabled:pointer-events-none"
                    disabled={!enableButton}
                >
                    <div>
                        Verificar
                    </div>
                </button>
            </form>
        </div>
    )
}

export default CodeVerification