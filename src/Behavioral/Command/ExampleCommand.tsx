import React, { useState } from 'react'
import { GetRequestCommand } from '.'


function ExampleCommand() {
    const [someParamas , setSomeParams] = useState<any>(null)

    const fetchCommand = new GetRequestCommand('YOUR_URL' ,someParamas)

  return (
    <div onClick={()=>fetchCommand.execute()}>
        CLick To Fetch
    </div>
  )
}

export default ExampleCommand