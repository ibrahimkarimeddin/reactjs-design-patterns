import React from 'react'
import Card from './Card'
import CardWithStar from './indext'

function ExampleDecorator() {
  return (
    <div style={{width:"400px"}}>

        <Card  content='Contetnt'  title='Title'/>
        {/* Create Custom Card Addition Without Change The Main Style  */}
        <CardWithStar  content='Content2' title='Title2' />
    </div>
  )
}

export default ExampleDecorator