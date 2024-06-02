import React, { useState, useEffect } from 'react';


type MediaType = "mobile" | "tablet"  | "desktop"
const mediaQueryFacade = {
  isMobile: () => window.matchMedia('(max-width: 767px)').matches,
  isTablet: () => window.matchMedia('(min-width: 768px) and (max-width: 1023px)').matches,
  isDesktop: () => window.matchMedia('(min-width: 1024px)').matches,
};



export const useMediaQuery = ():MediaType => {
  const [mediaQuery, setMediaQuery] = useState<MediaType>(() => {
    if (mediaQueryFacade.isMobile()) {
      return 'mobile';
    } else if (mediaQueryFacade.isTablet()) {
      return 'tablet';
    } else {
      return 'desktop';
    }
  });

  useEffect(() => {
    const handleResize = () => {
      if (mediaQueryFacade.isMobile()) {
        setMediaQuery('mobile');
      } else if (mediaQueryFacade.isTablet()) {
        setMediaQuery('tablet');
      } else {
        setMediaQuery('desktop');
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return mediaQuery;
};


