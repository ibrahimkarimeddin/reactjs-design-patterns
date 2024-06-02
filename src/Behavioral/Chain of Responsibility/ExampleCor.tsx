import React, { useReducer } from 'react'
import OrderStatusHandler, { AcceptedOrderHandler, DelivredOrderHandler, PenddingOrderHandler } from '.'

export type OrderStatus = 'pendding' | 'accepted' | 'delivred'
export type Order = {
  status: OrderStatus
}

const order: Order = {
  status: "pendding"
}

function ExampleCor() {

  const [, forceUpdate] = useReducer(x => x + 1, 0);

  const handlerStatus = new PenddingOrderHandler()

  handlerStatus.setNextOrderStatusHandler(new AcceptedOrderHandler()).setNextOrderStatusHandler(new DelivredOrderHandler())

  return (
    // Dynmic Button 
    <button onClick={() => {
      handlerStatus.handleOrderStatus(order)
      forceUpdate()

    }}>{order.status}</button>
  )
}

export default ExampleCor