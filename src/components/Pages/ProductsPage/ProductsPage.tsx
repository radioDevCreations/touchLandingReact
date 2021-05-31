import { FC } from 'react';
import HeroSection from '../HeroSection/HeroSection';
import {homeObjTwo} from './Data';

const ProductsPage: FC = () => {
    return ( <>
        <HeroSection {...homeObjTwo}/>
     </>);
}
 
export default ProductsPage;