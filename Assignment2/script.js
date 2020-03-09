function onFormSubmit(){
  var formData = readFormData();
  insertNewRecord(formData);
}

function readFormData() {
  var formData = {};
  formData["fullName"] = document.getElementById("fullName").value;
  formData["phone"] = document.getElementById("phone").value;
  return formData;
}

function insertNewRecord(data){
  var table = document.getElementById("elist").getElementsByTagName('tbody')[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.fullName;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.phone;
  cell3 = newRow.insertCell(2)
  cell3.innerHTML = '<a onClick ="onRemove(this)">Remove</a>';
}

//to reset to initial value
function resetForm() {
  document.getElementById("fullName").value = "";
  document.getElementById("phone").value = "";
}

function onRemove(td) {
  if(confirm('Are you sure')){
  row = td.parentElement.parentElement;
  document.getElementById("elist").deleteRow(row.rowIndex);
  resetForm();
   }
}
