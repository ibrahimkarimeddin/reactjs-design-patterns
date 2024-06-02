import React from 'react'
import { withAuth } from '.'


// This Is Auth Components
function ExampleProxy() {
  return (
    <div>ExampleProxy</div>
  )
}

export default withAuth(ExampleProxy)