interface Client {
    firstname: string;
    lastname: string;
  }
  
  let clients: Client[] = [];
  let myIndex: number;
  
  function addClient() {
    const firstNameInput = document.getElementById("firstname") as HTMLInputElement;
    const lastNameInput = document.getElementById("lastname") as HTMLInputElement;
  
    const newClient: Client = {
      firstname: firstNameInput.value,
      lastname: lastNameInput.value
    };
  
    clients.push(newClient);
    displayClients();
  }
  
  function displayClients() {
    const formListClientBody = document.getElementById("form-list-client-body");
    if (!formListClientBody) return;
  
    formListClientBody.innerHTML = "";
    for (let i = 0; i < clients.length; i++) {
      const myTr = document.createElement("tr");
      for (const key in clients[i]) {
        const mytd = document.createElement("td");
        mytd.innerHTML = clients[i][key];
        myTr.appendChild(mytd);
      }
  
      const actionTd = document.createElement("td");
  
      const editBtn = document.createElement("button");
      editBtn.innerHTML = "Edit";
      editBtn.setAttribute("class", "btn btn-sm btn-primary");
      editBtn.onclick = () => editClient(i);
  
      const deleteBtn = document.createElement("button");
      deleteBtn.innerHTML = "Delete";
      deleteBtn.setAttribute("class", "btn btn-sm btn-danger");
      deleteBtn.onclick = () => deleteClient(i);
  
      actionTd.appendChild(editBtn);
      actionTd.appendChild(deleteBtn);
      myTr.appendChild(actionTd);
  
      formListClientBody.appendChild(myTr);
    }
  
    document.getElementById("firstname")!.value = "";
    document.getElementById("lastname")!.value = "";
  }
  
  function editClient(i: number) {
    myIndex = i;
    const updateBtn = document.createElement("button");
    updateBtn.innerHTML = "Update";
    updateBtn.setAttribute("class", "btn btn-sm btn-success");
    updateBtn.onclick = updClient;
  
    document.getElementById("saveupdate")!.innerHTML = "";
    document.getElementById("saveupdate")!.appendChild(updateBtn);
  
    const client = clients[i];
    document.getElementById("firstname")!.value = client.firstname;
    document.getElementById("lastname")!.value = client.lastname;
  }
  
  function updClient() {
    const updatedClient: Client = {
      firstname: (document.getElementById("firstname") as HTMLInputElement).value,
      lastname: (document.getElementById("lastname") as HTMLInputElement).value
    };
    clients[myIndex] = updatedClient;
  
    const crBtn = document.createElement("button");
    crBtn.innerHTML = "Save";
    crBtn.setAttribute("class", "btn btn-sm btn-success");
    crBtn.onclick = addClient;
  
    document.getElementById("saveupdate")!.innerHTML = "";
    document.getElementById("saveupdate")!.appendChild(crBtn);
  
    displayClients();
  }
  
  function deleteClient(i: number) {
    clients.splice(i, 1);
    displayClients();
  }
  