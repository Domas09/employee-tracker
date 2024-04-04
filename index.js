require('dotenv').config();
const { Pool } = require('pg');
const inquirer = require('inquirer');
const {sqlDisplay, SqlFunctions} = require('./assets/sql');

const pool = new Pool(
    {
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        host: 'localhost',
        database: process.env.DB_DATABASE
    },
    console.log('Sucesfully connected to the database')
)

pool.connect();

inquirer
    .prompt([
        {
            type: 'list',
            message: `
            ███████╗███╗   ███╗██████╗ ██╗      ██████╗ ██╗   ██╗███████╗███████╗
            ██╔════╝████╗ ████║██╔══██╗██║     ██╔═══██╗╚██╗ ██╔╝██╔════╝██╔════╝
            █████╗  ██╔████╔██║██████╔╝██║     ██║   ██║ ╚████╔╝ █████╗  █████╗  
            ██╔══╝  ██║╚██╔╝██║██╔═══╝ ██║     ██║   ██║  ╚██╔╝  ██╔══╝  ██╔══╝  
            ███████╗██║ ╚═╝ ██║██║     ███████╗╚██████╔╝   ██║   ███████╗███████╗
            ╚══════╝╚═╝     ╚═╝╚═╝     ╚══════╝ ╚═════╝    ╚═╝   ╚══════╝╚══════╝
                                                                                 
            ███╗   ███╗ █████╗ ███╗   ██╗ █████╗  ██████╗ ███████╗██████╗        
            ████╗ ████║██╔══██╗████╗  ██║██╔══██╗██╔════╝ ██╔════╝██╔══██╗       
            ██╔████╔██║███████║██╔██╗ ██║███████║██║  ███╗█████╗  ██████╔╝       
            ██║╚██╔╝██║██╔══██║██║╚██╗██║██╔══██║██║   ██║██╔══╝  ██╔══██╗       
            ██║ ╚═╝ ██║██║  ██║██║ ╚████║██║  ██║╚██████╔╝███████╗██║  ██║       
            ╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝       
                                                                                 
            `,
            name: 'mainMenu',
            choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Role', 'Add Role', 'View All Departments', 'Add Department']
        }
    ]) 
    .then((response) => {
        if(response.mainMenu === 'View All Employees'){
            pool.query(sqlDisplay.all, function(err, {rows}){
                console.table(rows);
            });
        } else if(response.mainMenu === "Add Employee"){
            inquirer
                .prompt([
                    {
                        type: 'name',
                        message: 'First Name',
                        name: 'firstName'
                    },
                    {
                        type: 'name',
                        message: 'Last Name',
                        name: 'lastName'
                    },
                    {
                        type: 'name',
                        message: 'role id',
                        name: 'role'
                    },
                    {
                        type: 'name',
                        message: 'manager id', 
                        name: 'manager'
                    }
                ])
                .then((response) => {
                    const addEmployee = new SqlFunctions().addEmployee();
                    const params = [response.firstName, response.lastName, response.role, response.manager];
                    pool.query(addEmployee, params, function(err, {rows}){
                        console.log(rows);
                    })
                })
        } else if(response === 'Update Employee Role'){
            
        }
    })
