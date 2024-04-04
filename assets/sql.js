
const sqlDisplay = {
    all: "SELECT employees.id, employees.first_name, employees.last_name, roles.title, roles.salary, CONCAT(managers.first_name, ' ' ,managers.last_name) AS manager FROM roles JOIN employees ON roles.id = employees.role_id LEFT JOIN employees AS managers ON managers.id = employees.manager_id",
    role: "SELECT roles.id, roles.title, roles.salary, departments.department FROM departments JOIN roles ON departments.id = roles.department_id",
    deparment: "SELECT * FROM departments"
}
class SqlFunctions {
    addEmployee(){
        return `INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)`
    }
    changeRole(){
        return 'UPDATE employees SET role_id = $1 WHERE id = $2'
    }
    createRole(){
        return 'INSERT INTO roles (title, salary, department_id) VALUES ($1, $2, $3)'
    }
    createDepartment(){
        return 'INSERT INTO departments (department) VALUES ($1)'
    }
}

module.exports = {sqlDisplay, SqlFunctions};