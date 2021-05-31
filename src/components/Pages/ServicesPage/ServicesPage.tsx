import { FC } from 'react';
import HeroSection from '../HeroSection/HeroSection';
import {homeObjThree} from './Data';

const ServicesPage: FC = () => {
    return ( <>
        <HeroSection {...homeObjThree}/>
     </>);
}
 
export default ServicesPage;