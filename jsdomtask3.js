const name = document.getElementById("name")
const surname = document.getElementById("surname")
const age = document.getElementById("age")
const nationality = document.getElementById("nationality")
const position = document.getElementById("position")
const addbtn = document.getElementById("addbtn")
const experience = document.getElementById("experience")
const tBody = document.getElementById("tBody")
let id = 1;
let employees =[];



function addEmployee(name,surname,age,nationality,position,experience) {
  
  let newEmployee={
    id:id,
    name:name,
    surname:surname,
    age:age,
    nationality:nationality,
    position:position,
    experience:experience,
  }
id++;
employees.push(newEmployee);
renderList(employees)
}

function deleteEmployee(id) {
  const element=employees.find((employee)=>employee.id=id);
  const indexOf=employees.indexOf(element);
  employees.splice(indexOf,1);
  renderList(employees)
}
function renderList(employees) {
  let innerHtml="";
  for (let i = 0; i < employees.length; i++) {
    innerHtml+=`<tr>
    <th scope="row">${employees[i].id}</th>
    <td>${employees[i].name}</td>
    <td>${employees[i].surname}</td>
    <td>${employees[i].age}</td>
    <td>${employees[i].nationality}</td>
    <td>${employees[i].position}</td>
    <td>${employees[i].experience}</td>
    <td ><button class="btn btn-danger deleteBtns" onclick="deleteEmployee(${employees[i].id})">Delete</button></td>
  </tr>`
    
  }
  tBody.innerHTML=innerHtml;
 name.value="";
 surname.value="";
 age.value="";
}

addbtn.onclick=(e)=>{
  e.preventDefault();
  addEmployee(name.value,surname.value,age.value,nationality.value,position.value,experience.value)
}
