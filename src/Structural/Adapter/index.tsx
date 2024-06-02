
import React from 'react';
import { AdaptedCardData, CardData } from './type'

const Card: React.FC<CardData | AdaptedCardData> = (props : CardData | AdaptedCardData) => {


  const  {title , description , imageUrl} = adaptCardData(props)  
  
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '5px' }}>
      <h2>{title}</h2>
      <p>{description}</p>
      <img src={imageUrl} alt={title} style={{ maxWidth: '100%' }} />
    </div>
  );
};

export default Card;

 const adaptCardData = (data: AdaptedCardData | CardData  ): CardData => {  
  if(isCardAdapterData(data)){
    return {
      title: data.cardTitle,
      description: data.cardDescription,
      imageUrl: data.cardImageUrl,
    }; 
  }
  return data
  
  
};

function isCardAdapterData(obj: any): obj is AdaptedCardData {
  return (
    'cardTitle' in obj &&
    'cardDescription' in obj &&
    'cardImageUrl' in obj
  );
}