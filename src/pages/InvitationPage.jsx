import Chronometer from '../components/InvitationPage/Chronometer'
import ConfirmAssist from '../components/InvitationPage/ConfirmAssist'
import Head from '../components/InvitationPage/Head'
import Introduction from '../components/InvitationPage/Introduction'
import Location from '../components/InvitationPage/Location'
import MoreInformation from '../components/InvitationPage/MoreInformation'
import Slider from '../components/InvitationPage/Slider'

const InvitationPage = () => {

    return (
        <main>
            <Head/>
            <Introduction/>
            <Chronometer/>
            <Location/>
            <Slider/>
            <MoreInformation/>
            <ConfirmAssist/>
        </main>
    )
}

export default InvitationPage