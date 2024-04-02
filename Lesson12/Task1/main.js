function createUser() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
  
    var table = document.getElementById('employeeList').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow();
  
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
  
    cell1.innerHTML = table.rows.length;
    cell2.innerHTML = firstName;
    cell3.innerHTML = lastName;
    cell4.innerHTML = '<button onclick="deleteUser(this)">Delete</button>';
    cell5.innerHTML = '<button onclick="updateUser(this)">Update</button>';
  
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
  }
  
  function deleteUser(btn) {
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
  }
  
  function updateUser(btn) {
    var row = btn.parentNode.parentNode;
    var firstName = row.cells[1].innerHTML;
    var lastName = row.cells[2].innerHTML;
  
    var newFirstName = prompt("Enter new first name", firstName);
    var newLastName = prompt("Enter new last name", lastName);
  
    if (newFirstName !== null && newLastName !== null) {
      row.cells[1].innerHTML = newFirstName;
      row.cells[2].innerHTML = newLastName;
    }
  }
  