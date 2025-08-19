import { useEffect } from "react"
import InvitationPage from "./pages/InvitationPage"
import Login from "./pages/Login"
import { useInvitationStore } from "./stores/useInvitationStore"


function App() {

  const seeInvitationPage = useInvitationStore(state => state.seeInvitationPage)

  return (
    <main>
      {seeInvitationPage ? (
        <InvitationPage/>
      ) : (
        <Login />
      )}

    </main>
  )
}

export default App
