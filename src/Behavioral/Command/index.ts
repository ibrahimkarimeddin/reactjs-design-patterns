
import React, { useState } from 'react';
import axios from 'axios';


 abstract class Command {
   abstract execute():any   ;
}

export class GetRequestCommand extends Command {
    private params :any;
    private url :string ;

  constructor(url:string , params:any = null) {
    super()
    this.params = params ;
    this.url = url ;
  }

  async execute() {
    
  return   await axios.get(this.url , this.params)
  }
}

