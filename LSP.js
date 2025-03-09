// Пример демонстрации LSP
class Vehicle {
    drive() {
        throw new Error('This method must be implemented by subclasses');
    }
}

class Car extends Vehicle {
    drive() {
        console.log("Driving a car...");
    }
}

class Truck extends Vehicle {
    drive() {
        console.log("Driving a truck...");
    }
}

function travel(vehicle) {
    vehicle.drive();
}

// Пример использования
const car = new Car();
const truck = new Truck();

travel(car);   // Выведет: Driving a car...
travel(truck);  // Выведет: Driving a truck...
