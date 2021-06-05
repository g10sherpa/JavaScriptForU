/* jshint esversion:6*/

import { Employee } from "./employees/employee.js";
import { Customer } from "./customer/customer.js";

let employee = new Employee("John", "Doe", 36, "sr.programmer");
employee.greet();

let customer = new Customer("Layra", "lara", 29, "receptionist", "india");
customer.greet();
