
import React, { useState, useEffect, ReactNode } from 'react';
import { Image, ImageCarousel, Iterator } from '.';

const TIME_COUNTER = 5000  // ms
function  ImageCarouselComponent () {

    const [ImageToPreview, setImageToPreview] = useState<Image | undefined>(undefined);
    const imageList = new ImageCarousel([
      { id: 1, url: 'image1.jpg' },
      { id: 2, url: 'image2.jpg' },
      { id: 3, url: 'image3.jpg' },
    ]);
  
    useEffect(() => {
      const iterator :Iterator<Image>= imageList.createIterator();
  
      const imageInterval = setInterval(() => {
        const nextImage = iterator.next();
        if (nextImage) {
          setImageToPreview(nextImage);
        } else {
         
          setImageToPreview(iterator.reset());
        }
      }, TIME_COUNTER);
  
      return () => clearInterval(imageInterval);
    }, [imageList]);
  
    return (
      <div>
        <h2>Image Carousel</h2>
        <>
        {ImageToPreview && <img src={ImageToPreview.url} alt={`Image ${ImageToPreview.id}`} />}
        </>
      </div>
    );
  };
  
  export default ImageCarouselComponent;