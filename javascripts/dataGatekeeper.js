// storing the xhr call for the departments
const loadDepartments = require('./departments');
// storing the xhr call for the items
const loadItems = require('./items');
// the dom string printing each dept to the DOM is required
const departmentDom = require('./departmentDom');
// need to understand the data page first
const data = require('./data');

const whenItemsLoad = function () {
  const itemsData = JSON.parse(this.responseText).items;
  // takes the parsed var just created and passes it through data.setItems
  // what is data.setItems, exactly? data is the var created above. taking getting and setting. i don't understand getting and setting.
  data.setItems(itemsData);
};

const whenDepartmentsLoad = function () {
  const departmentsData = JSON.parse(this.responseText).departments;
  data.setDepartments(departmentsData);
  departmentDom(departmentsData);
};

const errorFunction = function () {
  console.error('shit broke');
};

const initializer = () => {
  loadDepartments(whenDepartmentsLoad, errorFunction);
  loadItems(whenItemsLoad, errorFunction);
};

module.exports = {
  initializer,
};
