import React from 'react'
import AxiosBuilder from '.';



const BaseURL = "https://YOUR_BACKEND_BASE_URL"



export const useAxios = ()=>{


    const isAuth = true  ;  // Type Your Auth Logic 
    
    const axios = new AxiosBuilder()
      .withBaseURL(BaseURL)
      .withHeaders({"Content-Type" :"application/json"})
      .withCredentials()
      .withTimeout(60000);


      if(isAuth){
        axios
        .withHeaders({ Authorization: 'Bearer your-token' })
      }

      return axios.build()
}


export const useAxiosFile = ()=>{

    return  new AxiosBuilder()
      .withBaseURL(BaseURL)
      .withHeaders({"Content-Type" :"application/json"})
      .withHeaders({'Accept': 'application/pdf'})
      .withHeaders({ Authorization: 'Bearer your-token' })
      .withCredentials()
      .withResponseType('arraybuffer')
      .withTimeout(60000)
      .build()

      ;
}



function ExampleBuilder() {
 

    const axios = useAxios()
    // axios.get('/user')

    const axios2 = useAxiosFile()  
    // axios2.get('/user/export_file')


    
}


export default ExampleBuilder