import axios from "axios";
import { Order, OrderStatus } from "./ExampleCor";



abstract class OrderStatusHandler {




    public nextHandler: OrderStatusHandler | null = null;

    setNextOrderStatusHandler(handler:OrderStatusHandler) : OrderStatusHandler {
      this.nextHandler = handler;
      return handler
    }
  
    // Handle the order status
    abstract handleOrderStatus(order:any):any;
  }












  export class PenddingOrderHandler extends OrderStatusHandler {
 

    handleOrderStatus(order:Order) {
      if (order.status === "pendding") {
                
        order.status = 'accepted'
            ChangeStatus('accepted')
        // make Your Own Logic 
            console.log('Pendding');
            
      } else if (this.nextHandler) {
        this.nextHandler.handleOrderStatus(order);
      }
    }
  }
  

 export  class AcceptedOrderHandler extends OrderStatusHandler {
    handleOrderStatus(order:Order) {
      if (order.status === "accepted") {

        order.status='delivred'
        ChangeStatus('delivred')
    } else if (this.nextHandler) {
        this.nextHandler.handleOrderStatus(order);
      }
    }
  }
  

  export class DelivredOrderHandler extends OrderStatusHandler {
    handleOrderStatus(order:Order) {
      if (order.status === "delivred") {



        console.log('DONE');
        
    } else if (this.nextHandler) {
        this.nextHandler.handleOrderStatus(order);
      }
    }
  }
  

  export default OrderStatusHandler

  function  ChangeStatus(new_status :OrderStatus){

    axios.post("https://YOUR_API_URL/api/change_status" , {
            new_status
        })
  }