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
    const [fadeOut, setFadeOut] = useState(false);

    const handleOpen = () => {
        setOpened(true);

        setTimeout(() => {
            setFadeOut(true);
        }, 1200);
        setTimeout(() => {
            setAudio(true)
        }, 1000)
    };
    useEffect(() => {

        const handleScroll = () => {
            setAudio(true);
            window.removeEventListener("scroll", handleScroll);
        };

        window.addEventListener("scroll", handleScroll);
        
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <main>
            {audio && (
                <audio
                    src='../songs/song.mp3'
                    autoPlay={true}
                />
            )}
    <div
      className={`envelope ${opened ? "open" : ""} ${
        fadeOut ? "fade-out" : ""
      }`}
    >
      <div className="triangle top" />

      <button
        className="seal"
        onClick={handleOpen}
      >
        <img src='./img/sello.webp'/>
      </button>

      <div className="triangle bottom" />
    </div>
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