import { FC } from 'react';
import HeroSection from '../HeroSection/HeroSection';
import {homeObjFour} from './Data';

const SignUp: FC = () => {
    return ( <>
        <HeroSection {...homeObjFour}/>
     </>);
}
 
export default SignUp;