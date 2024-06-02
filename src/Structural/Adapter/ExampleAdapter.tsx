    import React from 'react'
    import Card from '.'
import { AdaptedCardData, CardData } from './type';

export function fetchCardFromSourceA ():CardData {
  return {
    title: 'Card from Source A',
    description: 'This card is from Source A',
    imageUrl: 'IMAGE_URL',
  };
};

export  function fetchCardFromSourceB (): AdaptedCardData  {
  return {
    cardTitle: 'Card  B',
    cardDescription: 'DESCRIPTION B',
    cardImageUrl: 'IMAGE_URL',
  };
};
    function ExampleAdapter() {

        const data1 = fetchCardFromSourceA()
        
        const data2 = fetchCardFromSourceB()
    return (
        <>
        
            <Card {...data1}/>
            <Card {...data2}/>

        </>
    )
    }

    export default ExampleAdapter