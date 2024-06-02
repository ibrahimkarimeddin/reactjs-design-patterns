import React from 'react'
import Database from './'

function ExamplePrototype() {

    const live_data = [{id:1 , name:"admin"}]
    const mainDataBase =  new Database()
    mainDataBase.save(live_data)


    // Copy DataBase
    const TestDataBase = mainDataBase.clone();
    const dataTest =TestDataBase.load()
    // add Test Value With the Live Value
    TestDataBase.save([...dataTest  , {id:2 , name:"Test"}])
    
    

    // Load your data to your Application 
    

}

export default ExamplePrototype


