import Chronometer from '../components/InvitationPage/Chronometer'
import ConfirmAssist from '../components/InvitationPage/ConfirmAssist'
import Head from '../components/InvitationPage/Head'
import Introduction from '../components/InvitationPage/Introduction'
import Location from '../components/InvitationPage/Location'
import MoreInformation from '../components/InvitationPage/MoreInformation'
import Slider from '../components/InvitationPage/Slider'
import SuggestSongs from '../components/InvitationPage/SuggestSongs'

const InvitationPage = () => {

    return (
        <main>
            <audio
                src='../songs/song.mp3'
                autoPlay={true}
            />
            <Head/>
            <Introduction/>
            <Chronometer/>
            <Location/>
            <Slider/>
            <MoreInformation/>
            <ConfirmAssist/>
            <SuggestSongs/>
        </main>
    )
}

export default InvitationPage