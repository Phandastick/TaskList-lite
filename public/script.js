const myModal = document.getElementById('mymodal')
const createTaskBtn= document.getElementById('createTaskBtn')
const tBody = document.getElementById('table-body')
const addRowBtn = document.getElementById('addRowBtn')
const saveRowBtn = document.getElementById('saveRowBtn')

let counter = 1;

createTaskBtn.addEventListener('click', () => {
  const myInput = document.getElementById('tfTaskName')
  myModal.addEventListener('shown.bs.modal', () => {
    myInput.focus()
  })
})

function highlightRow(cb){
  //add highlight color here
  let row = cb.parentNode.parentNode;
  console.log(row)
  if(cb.checked == true){
    row.style.backgroundColor = "#90EE90";
  } else {
    row.style.backgroundColor = "aliceblue";
  }
}

function getRecord(){
  err = false;
  let elemName = document.getElementById('tfTaskName');
  let elemDesc = document.getElementById('tfTaskDesc');
  let elemDeadline = document.getElementById('tfDeadline');

   // Check if any of the fields are empty or contain only whitespace
   if (!elemName.value.trim()) {
    alert("Task name cannot be empty");
    return false;
  }
  
  if (!elemDesc.value.trim()) {
    alert("Task description cannot be empty");
    return false;
  }
  
  if (!elemDeadline.value.trim()) {
    alert("Task deadline cannot be empty");
    return false;
  }

  var record = {};
  record.taskName = document.getElementById('tfTaskName').value;
  record.taskDesc = document.getElementById('tfTaskDesc').value;
  record.taskDeadline = document.getElementById('tfDeadline').value;
  return record;
}

function addClass(row){
  let childList = row.childNodes;
  childList.forEach(cell => {
    cell.classList.add(row.id)
    cell.style.backgroundColor = "inherit";
  });
}

function setTableData(data){
  /*
  Data {
    taskName,
    taskDesc,
    taskDeadline
  }
  */

  //init row
  var row = tBody.insertRow();
  var rowId = "table-row-" + counter;
  row.id = rowId;
  row.classList.add('table-row')

  //create row
  var textNode = document.createTextNode(counter); 
  var cell = row.insertCell();
  cell.appendChild(textNode);
  cell.classList.add("row-id");

  //append contents
  var nameCell = row.insertCell();
  var descCell = row.insertCell();
  var deadlineCell = row.insertCell();

  var nameTextNode = document.createTextNode(data.taskName);
  var descTextNode = document.createTextNode(data.taskDesc);
  var deadlineTextNode = document.createTextNode(data.taskDeadline);

  nameCell.classList.add('nameCol');
  descCell.classList.add('descCol');
  deadlineCell.classList.add('deadlineCol');

  nameCell.appendChild(nameTextNode);
  descCell.appendChild(descTextNode);
  deadlineCell.appendChild(deadlineTextNode);

  // add checkbox
  var cell = row.insertCell();

  var checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.id = ("cbFinished-" + counter);
  checkBox.classList.add('Checkboxes')
  checkBox.addEventListener('click', function (){
    highlightRow(this)
  });

  cell.classList.add('cbCol')
  cell.appendChild(checkBox);

  //cancel button
  var cell = row.insertCell();

  var button = document.createElement('div');
  button.innerHTML += '❌';
  button.classList.add('deleteBtn');
  button.id = ('deleteBtn-' + counter);

  button.addEventListener('click', () => {
    deleteRow(button);
  })

  cell.classList.add('deleteCol');
  cell.appendChild(button);

  addClass(row);

  counter++;
}

function getTableData(){
  var tableElem = document.getElementsByClassName('table');
  let tableRows = tBody.childNodes;
  var tableData = [];

  tableRows.forEach((row) => {
    // console.log(row);
    let nameValue = row.cells[1].innerHTML;
    let descValue = row.cells[2].innerHTML;
    let deadlineValue = row.cells[3].innerHTML;
    
    let rowData = {
      taskName: nameValue,  
      taskDesc: descValue,
      taskDeadline: deadlineValue
    };

    tableData.push(rowData);
  });

  let jsonData = JSON.stringify(tableData);
  // console.log(tableData);
  // console.log("===============================")
  console.log(jsonData);

  return jsonData;
}

function deleteRow(row){
  var deleterow = row.parentNode.parentNode;
  var parentTable = deleterow.parentNode;
  parentTable.removeChild(deleterow);
}

function saveData(tableData){
  // do add data to txt hoorah

}

addRowBtn.addEventListener('click', () => {
  // getData in the modal
  var tableData = getRecord();
  // console.log(tableData);
  // add data from modal to table
  setTableData(tableData);
})

saveRowBtn.addEventListener('click', () => {
  var tableData = getTableData()
  saveData(tableData)
})


// document.addEventListener("DOMContentLoaded", function(event) {
//   var form = document.getElementById('taskForm');
//   form.addEventListener();
// });