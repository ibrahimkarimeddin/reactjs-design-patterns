

import React from 'react'
import { PaymentMangment, PaymenyType } from '.'

function ExampleStrategy() {

  const handelPayment = (type: PaymenyType) => {
    const PaymentStrategy: PaymentMangment = new PaymentMangment(type)
    PaymentStrategy.pay(100);
  }
  return (
    <div>
      <div onClick={() => handelPayment('PayPal')}>Pay With Paypal</div>
      <div onClick={() => handelPayment('Amazon')}>Pay With Amazon</div>
      <div onClick={() => handelPayment('CreditCard')}>Pay With CreditCard</div>
    </div>
  )
}

export default ExampleStrategy