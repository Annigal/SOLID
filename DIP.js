// Пример демонстрации DIP

class DatabaseConnection {
    connect() {
        throw new Error('This method must be implemented by subclasses');
    }
}

class MySQLConnection extends DatabaseConnection {
    connect() {
        console.log("Connected to MySQL database.");
    }
}

class PostgreSQLConnection extends DatabaseConnection {
    connect() {
        console.log("Connected to PostgreSQL database.");
    }
}

class DataAccessLayer {
    constructor(connection) {
        this.connection = connection;
    }

    retrieveData() {
        this.connection.connect();
        console.log("Data retrieved from the database.");
    }
}

// Пример использования
const mysqlConn = new MySQLConnection();
const postgresqlConn = new PostgreSQLConnection();

const dalMySQL = new DataAccessLayer(mysqlConn);
const dalPostgreSQL = new DataAccessLayer(postgresqlConn);

dalMySQL.retrieveData(); // Подключится к MySQL
dalPostgreSQL.retrieveData(); // Подключится к PostgreSQL
