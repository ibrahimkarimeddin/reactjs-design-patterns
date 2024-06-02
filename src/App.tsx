import React from 'react'
import ExampleSingleton from './Creational/Singleton/ExampleSingleton'
import ConcretePrototype from './Creational/Prototype';
import ExamplePrototype from './Creational/Prototype/ExamplePrototype';
import ExampleFactory from './Creational/Factory Method/ExampleFactory';
import ExampleCor from './Behavioral/Chain of Responsibility/ExampleCor';
import ExampleAdapter from './Structural/Adapter/ExampleAdapter';
import ExampleFacad from './Structural/Facad/ExampleFacad';
import ExampleProxy from './Structural/Proxy/ExampleProxy';
import ExampleDecorator from './Structural/Decorator/ExampleDecorator';

function App() {


  // Creational Patterm

  // 1. Singlton
  // ExampleSingleton()

  //2. Prototype 
  // ExamplePrototype()

  //3. Factory
  // return <ExampleFactory/>

  //4. Builder 
  // ExampleSingleton()

  // Behavioral 

  //1.Chain Of Responsibilty
  // return ExampleCor()



  // return ExampleAdapter()

  // return ExampleFacad();

  // return <ExampleProxy />;

  // return <ExampleDecorator/>
  return (
    <div>
      React.js Design Patterns With Real Example Project
    </div>
  )
}

export default App