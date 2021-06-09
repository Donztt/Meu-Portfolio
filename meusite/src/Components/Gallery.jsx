import React from 'react';
import ImageGallery from 'react-image-gallery';
import Image1 from '../Photos/GameImages/Image1.PNG';
import Image2 from '../Photos/GameImages/Image2.PNG';
import Image3 from '../Photos/GameImages/Image3.PNG';
import Image4 from '../Photos/GameImages/Image4.PNG';
import Image5 from '../Photos/GameImages/Image5.PNG';

const imagesGallery = [
    {
        original:  Image1,
    },
    {
        original:  Image2,
    },
    {
        original:  Image3,
    },
    {
        original:  Image4,
    },
    {
        original:  Image5,
    },
      
  ];

export class Gallery extends React.Component {
        render() {
            return <ImageGallery items={imagesGallery} showThumbnails = {false} showBullets = {true} />;
        }
}

//export default Gallery;