import { useInvitationStore } from "../stores/useInvitationStore"
import CodeVerification from "../components/CodeVerification"
import Invitiation from "../components/Invitation"

const Login = () => {

    const data = useInvitationStore(state => state.data)

    return (
        <div>
            <div className="w-screen h-screen flex items-center justify-center bg-[url(../img/background-prev.png)] bg-no-repeat bg-cover">
            <div className="bg-[#f7c90047] absolute w-full h-full shadow-[inset_0px_0px_150px_0px_#ffffff]"></div>
                {!data.guest_information?.guest_id ? (
                    <CodeVerification/>
                ) : (
                    <Invitiation />
                )}

            </div>
        </div>
    )
}

export default Login