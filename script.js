const myModal = document.getElementById('mymodal')
const createTaskBtn= document.getElementById('mrbutton')
const tBody = document.getElementById('table-body')
const addRowBtn = document.getElementById('addRowBtn')

let counter = 0;

createTaskBtn.addEventListener('click', () => {
  const myInput = document.getElementById('tfTaskName-1')
  myModal.addEventListener('shown.bs.modal', () => {
    myInput.focus()
  })
})

function highlightRow(id){
  //add highlight color here
  console.log("checked box " + id)
}

// function highlightEmpty(tfEmpty){
//   tfEmpty.
// }

addRowBtn.addEventListener('click', () => {
  let err = false;
  console.log("Button Clicked");

  const details = document.getElementsByClassName("tfCreateTask");
  
  var row = tBody.insertRow();
  row.id = "table-row-" + counter;

  for (let i = 0; i < details.length; i++) {
    var text = details.item(i).value;

    //check if empty, idk about spaces
    if(text === ""){
      console.log("Empty text detected at Text Field ID: " + details.item(i).id);
      // highlightEmpty(details.item(i));
      err = true
      break
    }

    console.log(text)

    var cell = row.insertCell();

    var textNode = document.createTextNode(text); 
    cell.appendChild(textNode);
  }

  if(err){
    return null;
  }

 var cell = row.insertCell();

  // add checkbox
  var checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.classList.add("cbFinished-" + counter);

  cell.appendChild(checkBox);
  counter++;
})

