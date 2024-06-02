import React, { ReactNode } from "react"

interface Props{

}


type ElemntType = "button" | "link"  | 'div'  // Add Your Own Elemnt To Factory


interface ButtonProps extends React.HtmlHTMLAttributes<HTMLButtonElement>   {
    // Add Your Custom Props
}


interface DivProps extends React.HtmlHTMLAttributes<HTMLDivElement>   {
    // Add Your Custom Props
    
}


interface LinkProps extends React.HtmlHTMLAttributes<HTMLAnchorElement>   {
    // Add Your Custom Props
    
}

interface ElementProps {
    type: ElemntType;
  }

 

type All =ElementProps & (ButtonProps | DivProps | LinkProps)


const ButtonComponent = (props:ButtonProps)=>{

    // Custom Your Button Component

    return <button {...props} />
} 



const DivComponent  = (props:DivProps)=>{

    // Custom Your Div Component

    return <div {...props} />
} 



const LinkComponent  = (props:LinkProps)=>{

    // Custom Your Link Component
    
    return <a {...props} />
} 



export const ComponentFactory = (props:All) => {
    switch (props.type) {
      case 'div':
        return <DivComponent {...props as DivProps} />;
      case 'link':
        return <LinkComponent {...props as LinkProps}  />;
      case 'button':
        return <ButtonComponent {...props as ButtonProps} />;
      default:
        return <DivComponent {...props as DivProps} />;
    }
  };