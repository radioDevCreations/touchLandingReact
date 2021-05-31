import { FC } from 'react';
import HeroSection from '../HeroSection/HeroSection';
import {homeObjFour, homeObjOne, homeObjThree, homeObjTwo} from './Data';
import Pricing from '../../Pricing/Pricing'

const HomePage: FC = () => {
    return ( <>
        <HeroSection {...homeObjOne}/>
        <HeroSection {...homeObjTwo}/>
        <HeroSection {...homeObjThree}/>
        <Pricing />
        <HeroSection {...homeObjFour}/>
     </>);
}
 
export default HomePage;