const customerRoute = require("./customers.route");
const employeeRoute = require("./employee.route");
const expensesRoute = require("./expenses.route");
const inventoryRoute = require("./inventory.route");
const tasksRoute = require("./tasks.route");
const userRoute = require("./user.route").default;
const vendorsRoute = require("./vendors.route");

module.exports = {
  user: userRoute,
  customer: customerRoute,
  employee: employeeRoute,
  expenses: expensesRoute,
  inventory: inventoryRoute,
  tasks: tasksRoute,
  vendors: vendorsRoute,
};
