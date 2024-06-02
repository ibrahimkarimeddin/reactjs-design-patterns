

export type PaymenyType = "CreditCard" | "PayPal" | "Amazon"

interface PaymentStrategy {
  pay(amount: number): void;
}

class CreditCardPaymentStrategy implements PaymentStrategy {
  pay(amount: number): void {

  }
}

class PayPalPaymentStrategy implements PaymentStrategy {
  pay(amount: number): void {

  }
}
class AmazonPaymentStrategy implements PaymentStrategy {
  pay(amount: number): void {

  }
}

export class PaymentMangment implements PaymentStrategy {

  private paymentStrategy?: PaymentStrategy;

  constructor(type: PaymenyType) {

    if (type === 'CreditCard') {
      this.paymentStrategy = new CreditCardPaymentStrategy()
    } else if (type === 'Amazon') {
      this.paymentStrategy = new AmazonPaymentStrategy()
    } else {
      this.paymentStrategy = new PayPalPaymentStrategy()
    }
  }
  pay(amount: number): void {
    this.paymentStrategy?.pay(amount);
  }

}