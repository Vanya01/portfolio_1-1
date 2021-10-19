
import './styles_hero/hero_style.css'
import photo1 from  './Imgs/Summer-vibes_main_photo.jpg'
import photo2 from './Imgs/Summer-vibes_main_photo.jpg'

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

export const Hero = (
    <AwesomeSlider>
        <div data-src='./Imgs/Summer-vibes_main_photo.jpg' />
        <div data-src='./Imgs/Summer-vibes_main_photo.jpg' />
        <div data-src='./Imgs/Summer-vibes_main_photo.jpg' />
    </AwesomeSlider>
);

