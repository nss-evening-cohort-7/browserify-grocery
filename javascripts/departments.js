// this is the xhr request to get the departments from the json file
const loadDepartments = (loadFunction, errorFunction) => {
  const myRequest = new XMLHttpRequest();
  myRequest.addEventListener('load', loadFunction);
  myRequest.addEventListener('error', errorFunction);
  myRequest.open('GET', '../db/departments.json');
  myRequest.send();
};

// this makes the loadDepartments function available to other files
module.exports = loadDepartments;
