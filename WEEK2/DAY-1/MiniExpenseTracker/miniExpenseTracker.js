let db;
let request = indexedDB.open("ExpenseDB", 1);

request.onupgradeneeded = function(e){
    db = e.target.result;
    if(!db.objectStoreNames.contains("expenses")){
        db.createObjectStore("expenses", { keyPath: "id", autoIncrement: true });
    }
}

request.onsuccess = function(e){
    db = e.target.result;
    viewExpenses();
}

request.onerror = function(){
    alert("Database error");
}

function addExpense(){
    let title = document.getElementById("title").value;
    let amount = parseFloat(document.getElementById("amount").value);
    let date = document.getElementById("date").value;
    if(!title || isNaN(amount) || !date) return;

    let transaction = db.transaction(["expenses"], "readwrite");
    let store = transaction.objectStore("expenses");
    store.add({title, amount, date});
    transaction.oncomplete = function(){ viewExpenses(); }
}

function viewExpenses(){
    let tbody = document.getElementById("expenseList");
    tbody.innerHTML = "";
    let transaction = db.transaction(["expenses"], "readonly");
    let store = transaction.objectStore("expenses");
    let requestAll = store.openCursor();
    requestAll.onsuccess = function(e){
        let cursor = e.target.result;
        if(cursor){
            let tr = document.createElement("tr");
            tr.innerHTML = `
                <td>${cursor.value.title}</td>
                <td>${cursor.value.amount}</td>
                <td>${cursor.value.date}</td>
                <td><button onclick="deleteExpense(${cursor.value.id})">Delete</button></td>
            `;
            tbody.appendChild(tr);
            cursor.continue();
        }
    }
}

function deleteExpense(id){
    let transaction = db.transaction(["expenses"], "readwrite");
    let store = transaction.objectStore("expenses");
    store.delete(id);
    transaction.oncomplete = function(){ viewExpenses(); }
}