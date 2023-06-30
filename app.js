let addBtn = document.getElementById("addButton");
let titleInput = document.getElementById("title");
let authorInput = document.getElementById("author");
let genreInput = document.getElementById("genre");
let startDateInput = document.getElementById("start-date");
let completeDateInput = document.getElementById("complete-date");
let statusInput = document.getElementById("status");
let table = document.getElementById('books').getElementsByTagName('tbody')[0];
let jsonText = document.getElementById('json-text')

//add click event listener to get data when data is entered
addBtn.addEventListener("click", function(){

    //store data in JavaScript object
    let data = {
        "title": titleInput.value,
        "author": authorInput.value,
        "genre": genreInput.value,
        "start-date": startDateInput.value,
        "complete-date": completeDateInput.value,
        "status": statusInput.value,
    };
    //convert to JSON
    jsonText.innerHTML = JSON.stringify(data)
})

//validate inputs
addBtn.addEventListener('click', (event) =>
{
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


//loop to validation
let validateInput = () => {
    if (titleInput.value ==='')
    {
        alert("Please enter your title");
    }
    /*added/changed*/
    else if (authorInput.value === ''){
        alert("Please complete Author name");
    }
    else if (statusInput.value === 'Completed' && (completeDateInput.value === '')) {
        alert("Please enter Complete date for Completed Books");
    }
    else if (startDateInput.value === ''){
        // Autofill start date
        const today = new Date();
        startDateInput.value = today.toISOString().split('T')[0];
        alert("You didn't enter a Start Date. It will be saved as today if you add the book.");
    }
    else if (completeDateInput.value !== '' && startDateInput.value >= completeDateInput.value){
        alert("The start date should be less than complete date. Please try again");

    } else {
        addNewRow();
        alert("Form submitted successfully!");

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


