
const sqlDisplay = {
    all: "SELECT employees.id, employees.first_name, employees.last_name, roles.title, roles.salary, CONCAT(managers.first_name, ' ' ,managers.last_name) AS manager FROM roles JOIN employees ON roles.id = employees.role_id LEFT JOIN employees AS managers ON managers.id = employees.manager_id",
    
}
class SqlFunctions {
    addEmployee(){
        return `INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)`
    }
}

module.exports = {sqlDisplay, SqlFunctions};