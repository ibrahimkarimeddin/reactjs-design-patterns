import React, { ReactNode } from 'react'
import { ComponentFactory } from '.'

function ExampleFactory() {
  

  return (
    <>
  <ComponentFactory type="button"   className='your design'>
    My Button
  </ComponentFactory>
  <ComponentFactory type="link"  onClick={()=>{}} >
    My Link
  </ComponentFactory>
  <ComponentFactory type="div" style={{background:'red'}}  >
    My Div 
  </ComponentFactory>
      </>
  )
}

export default ExampleFactory