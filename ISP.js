// Пример демонстрации ISP
class FullPaymentSystem {
    makePayment() {
        throw new Error('This method must be implemented by subclasses');
    }

    refundPayment() {
        throw new Error('This method must be implemented by subclasses');
    }
}

class BasicPaymentSystem extends FullPaymentSystem {
    makePayment() {
        console.log("Basic payment made.");
    }

    refundPayment() {
        throw new Error("Refund not supported in basic system.");
    }
}

class AdvancedPaymentSystem extends FullPaymentSystem {
    makePayment() {
        console.log("Advanced payment made.");
    }

    refundPayment() {
        console.log("Refund processed successfully.");
    }
}

// Пример использования
const basicSystem = new BasicPaymentSystem();
const advancedSystem = new AdvancedPaymentSystem();

basicSystem.makePayment(); // Выполняется успешно
advancedSystem.refundPayment(); // Поддерживается в advanced системе
