import './styles_hero/hero_style.css'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

export default function Hero() {
    return (

        <AwesomeSlider>
            <div data-src='./Imgs/Summer-vibes_main_photo.jpg'/>
            <div data-src='./Imgs/Summer-vibes_main_photo.jpg'/>
            <div data-src='./Imgs/Summer-vibes_main_photo.jpg'/>
        </AwesomeSlider>
    )
};

