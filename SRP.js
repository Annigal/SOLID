class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    // Метод расчета зарплаты
    calculateAnnualSalary() {
        return this.salary * 12; // Годовая зарплата
    }
}

class ReportGenerator {
    generateReport(employee) {
        console.log(`${employee.name}'s annual salary is ${employee.calculateAnnualSalary()} USD`);
    }
}

// Пример использования
const emp = new Employee("John Doe", 5000);
const reporter = new ReportGenerator();
reporter.generateReport(emp);
