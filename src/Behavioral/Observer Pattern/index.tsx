

export interface ObserverType {key:string , fetch:(() => void)}


export class ObserverGetRequest {

  
  private  observers: ObserverType[] = [];

  constructor(obs:ObserverType[] = []){
    this.observers = obs  ; 
  }

   addObserver (observer:ObserverType )  {
    this.observers.push(observer);
  };

  // Method to remove an observer from the list
   removeObserver  ()  {
    this.observers.pop();
  };

  // Method to notify all observers
   notifyObservers  (key:string )  {
    this.observers.forEach((observer:ObserverType) => {
      if(observer.key === key){
        observer.fetch()
      }
    });
  };

}













// class Top {

//   private  array :Down[] =[]
//   public  data :any [] = []


//   addDown(down :Down){
//     this.array.push(down)
//   }

//   notify(){
//     this.array.forEach(element => {
//         element.getData()
//       // Later  
//     });
//   }
// }


// class Down {
//     private top?:Top  
    

//     constructor(top:Top){
//       this.top = top
//     }
//     getData(){
      
//       return this?.top?.data;
//     }
    



// }



// const channelCity = new Top()
// const channelCity2 = new Top()


// const driver1  = new Down(channelCity)
// const driver2  = new Down(channelCity)
// const driver3  = new Down(channelCity2)



// channelCity.addDown(driver1)
// channelCity.addDown(driver2)
// channelCity2.addDown(driver3)


// channelCity.notify()
