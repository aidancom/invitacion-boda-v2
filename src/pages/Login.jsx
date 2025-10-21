import { useInvitationStore } from "../stores/useInvitationStore"
import CodeVerification from "../components/CodeVerification"
import Invitiation from "../components/Invitation"

const Login = () => {

    const data = useInvitationStore(state => state.data)

    return (
        <div>
            <div className="w-screen h-screen flex items-center justify-center bg-[url(../img/background-prev.png)] bg-no-repeat bg-cover">
            <div className="bg-[#0000001c] absolute w-full h-full"></div>
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