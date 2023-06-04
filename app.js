let addBtn = document.getElementById("add-button");
let titleInput = document.getElementById("title");
let authorInput = document.getElementById("author");
let genreInput = document.getElementById("genre");
let startDateInput = document.getElementById("start-date");
let completeDateInput = document.getElementById("complete-date");
let statusInput = document.getElementById("status");
let table = document.getElementById('books').getElementsByTagName('tbody')[0];

addBtn.addEventListener('click', (event) => {
    event.preventDefault();
    validateInput();
});


// Add new row in table function
let addNewRow = () => {
    let title = titleInput.value;
    let author = authorInput.value;
    let genre = genreInput.value;
    let startDate = startDateInput.value;
    let completeDate = completeDateInput.value;
    let status = statusInput.value;

    let newRow = table.insertRow(0);
    let titleCell = newRow.insertCell();
    let authorCell = newRow.insertCell();
    let genreCell = newRow.insertCell();
    let startDateCell = newRow.insertCell();
    let completeDateCell = newRow.insertCell();
    let statusCell = newRow.insertCell();

    titleCell.textContent = title;
    authorCell.textContent = author;
    genreCell.textContent = genre;  
    startDateCell.textContent = startDate; 
    completeDateCell.textContent = completeDate; 
    statusCell.textContent = status;
};

let validateInput = () => {
    if (titleInput.value ==='')
    {
        alert("Please input your title");
    } 
    else if (startDateInput.value > completeDateInput.value)
    {
        alert("The start date should greater than complete date, please try again")
    } else {
    addNewRow();
    }
};


// Edit Row
// for (var i = 0; i < table.rows.length; i++)
// {
//     table.rows[i].onclick = function ()
//     {
//         document.getElementById('').value = this.cells[0].innerHTML; 
//     }
// }


