
function readFormData() {
    var formData = {};
    formData["firstName"] = document.getElementById("firstName").value;
    formData["lastName"] = document.getElementById("lastName").value;

    return formData;
}

function createUser(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('')[0]
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = 0;
    cell2 = newRow.insertCell(1);
    cell1.innerHTML = data.firstName;
    cell3 = newRow.insertCell(2);
    cell2.innerHTML = data.lastName;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}
function deleteUser() {
  alert('Delete button clicked');
  // Add logic to delete user here
}
function updateUser() {
  alert('Update button clicked');
  // Add logic to update user here
}
