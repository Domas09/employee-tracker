INSERT INTO departments (department) VALUES 
('Sales'),
('Engineering'),
('Finance'),
('Legal');

INSERT INTO roles (title, salary, department_id) VALUES
('Sales Manager', 100000, 1),
('Salesperson', 80000, 1),
('Lead Engineer', 150000, 2),
('Software Engineer', 125000, 2),
('Account Manager', 160000, 3),
('Accountant', 120000, 3),
('Legal Team Lead', 250000, 4),
('Lawyer', 190000, 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES
('Fred', 'Flinstone', 1, null),
('Ronald', 'Mcdonald', 2, 1),
('Chucky', 'Cheese', 3, null),
('Daffy', 'Duck', 4, 3),
('The', 'Rock', 5, null),
('Hulk', 'Hogan', 6, 5),
('Manny', 'Mammoth', 7, null),
('Speedy', 'Gonzoles', 8, 7);
        