import { useEffect, useState } from 'react'
import Chronometer from '../components/InvitationPage/Chronometer'
import ConfirmAssist from '../components/InvitationPage/ConfirmAssist'
import Head from '../components/InvitationPage/Head'
import Introduction from '../components/InvitationPage/Introduction'
import Location from '../components/InvitationPage/Location'
import MoreInformation from '../components/InvitationPage/MoreInformation'
import Slider from '../components/InvitationPage/Slider'
import SuggestSongs from '../components/InvitationPage/SuggestSongs'
import '../assets/css/envelope.css';

const InvitationPage = () => {

    const [audio, setAudio] = useState(false);
    const [opened, setOpened] = useState(false);
    const [hidden, setHidden] = useState(false);

    const handleOpen = () => {
        setOpened(true);

        setTimeout(() => {
            setHidden(true);
        }, 1200);

        // Inicia el audio al hacer click
        setAudio(true);
    };

    // Bloquea el scroll mientras las puertas están visibles
    useEffect(() => {
        if (!opened) {
            document.documentElement.style.overflow = 'hidden';
        } else {
            document.documentElement.style.overflow = '';
        }
        if (!hidden) {
            document.body.style.overflow = 'hidden';
            document.body.style.height = '100vh';
        } else {
            document.body.style.overflow = '';
            document.body.style.height = '';
        }

        return () => {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
            document.body.style.height = '';
        };
    }, [hidden]);

    return (
        <main>
            {audio && (
                <audio
                    src="/songs/song.mp3"
                    autoPlay
                    loop
                />
            )}

            <div
                className={`doors-container ${hidden ? "hidden" : ""}`}
                onClick={handleOpen}
            >
                <div className={`doors ${opened ? "open" : ""}`}>
                    <div className='seal'>
                        <img src="../public/img/sello.png"></img>
                    </div>
                    <div className="door left" />
                    <div className="door right" />
                </div>
            </div>

            <Head />
            <Introduction />
            <Chronometer />
            <Location />
            <Slider />
            <MoreInformation />
            <ConfirmAssist />
            <SuggestSongs />
        </main>
    )
}

export default InvitationPage