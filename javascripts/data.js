const loadDepartments = require('./departments');

const whenDepartmentsLoad = function () {
  const data = JSON.parse(this.responseText).departments;
  console.log('departments', data);
};

const errorFunction = function () {
  console.error('shit broke');
};

const initializer = () => {
  loadDepartments(whenDepartmentsLoad, errorFunction);
};

module.exports = {
  initializer,
};
