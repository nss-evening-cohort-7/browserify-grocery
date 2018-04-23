const events = require('./events');
// var created to hold the location on the dom that has the ID departments
const departmentOutputDiv = document.getElementById('departments');

// displaying the departments 4-across
// don't understand data-department-id
// we're not printing it here, if i'm not mistaken; only returning
// returning makes it available outside its own function
// need to understand whether departments is just placeholder in 1st appearance. i don't think it is in the second; it refers to the json object name
const domString = (departments) => {
  let domStrang = '';
  departments.forEach((department) => {
    domStrang += `<div class="col-sm-3 department">`;
    domStrang +=   `<h3 class="department-title hide" data-department-id="${department.id}">${department.name}</h3>`;
    domStrang +=   `<img class="department-image" src="${department.img}">`;
    domStrang += `</div>`;
  });
  return domStrang;
};

// departmentOutputDiv is holding the dom location where to print
// want to ask about domString vs domStrang -- domString is called here; the whole function
const printDepartmentToDom = (departments) => {
  departmentOutputDiv.innerHTML = domString(departments);
  events.addDepartmentEvents();
};

// the purpose of this page is to build up the departments in a grid and print them to the DOM. makes the print function available.
module.exports = printDepartmentToDom;
