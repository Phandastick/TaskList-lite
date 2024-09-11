const myModal = document.getElementById('mymodal')
const myInput = document.getElementById('tfTaskName')
const createTaskBtn= document.getElementById('mrbutton')
const tBody = document.getElementById('table-body')
const addRowBtn = document.getElementById('addRowBtn')

let counter = 0;

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})

function highlightRow(id){
  //add highlight color here
  console.log("checked box " + id)
}

addRowBtn.addEventListener('click', () => {
  console.log("Button Clicked");

  const details = document.getElementsByClassName("tfCreateTask");
  
  var row = tBody.insertRow();
  row.id = "table-row-" + counter;
  counter++;

  for (let i = 0; i < details.length; i++) {
    var cell = row.insertCell();
    var text = details.item(i).value;
    console.log(text);

    var textNode = document.createTextNode(text); 
    cell.appendChild(textNode);
  }

  var cell = row.insertCell();

  var checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.classList.add("finishedCheck");

  var parentRowId = checkBox.parentNode.id;

  checkBox.onclick = function() {highlightRow(parentRowId)};

  cell.appendChild(checkBox);
})