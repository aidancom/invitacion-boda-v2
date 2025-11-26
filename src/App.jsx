import InvitationPage from "./pages/InvitationPage"
import Login from "./pages/Login"
import { useInvitationStore } from "./stores/useInvitationStore"
import { Bounce, ToastContainer } from "react-toastify"


function App() {

  const seeInvitationPage = useInvitationStore(state => state.seeInvitationPage)

  return (
    <main>
      {seeInvitationPage ? (
        <InvitationPage/>
      ) : (
        <Login />
      )}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="light"
        transition={Bounce}
      />
    </main>
  )
}

export default App
