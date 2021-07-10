import { getByLabelText } from "@testing-library/dom";
import ImageOne from '../images/ImageOne.jpg';
import ImageTwo from '../images/ImageTwo.jpg';
import ImageThree from '../images/ImageThree.jpg';
export const SliderDataOne= [
   { 
       title:'Magija mirisa',
       description: 'Otkrijte opojne mirise iz nase kolekcije',
       path: '/candles',
       label:'SVECE',
       image: ImageOne,
       alt: 'Candle'

       
   },

   { 
    title:'Opustite cula',
    description: 'Stvorite spa unutar svoje kuce',
    path: '/candles',
    label:'SVECE',
    image: ImageTwo,
    alt: 'Candle'

    
},

{ 
    title:'Sik dodaci',
    description: 'Upotpunite ugodjaj',
    path: '/accessories',
    label:'DODACI',
    image: ImageThree,
    alt: 'Accessorize'

    
}




]