// Пример демонстрации OCP на JavaScript

class PaymentMethod {
    pay(amount) {
        throw new Error('This method must be implemented by subclasses');
    }
}

class CreditCard extends PaymentMethod {
    pay(amount) {
        console.log(`Paid ${amount} using credit card.`);
    }
}

class BankTransfer extends PaymentMethod {
    pay(amount) {
        console.log(`Paid ${amount} via bank transfer.`);
    }
}

class PaymentProcessor {
    processPayment(method, amount) {
        method.pay(amount);
    }
}

// Пример использования
const processor = new PaymentProcessor();
const creditCard = new CreditCard();
const bankTransfer = new BankTransfer();

processor.processPayment(creditCard, 100); // Paid 100 using credit card
processor.processPayment(bankTransfer, 200); // Paid 200 via bank transfer
