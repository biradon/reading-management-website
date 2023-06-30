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
        promptUserValidation();
        // validateInput();
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
// let validateInput = () => {
//     if (titleInput.value ==='')
//     {
//         alert("Please enter your title");
//     }
//     /*added/changed*/
//     else if (authorInput.value === ''){
//         alert("Please complete Author name");
//     }
//     else if (statusInput.value === 'Completed' && (completeDateInput.value === '')) {
//         alert("Please enter Complete date for Completed Books");
//     }
//     else if (startDateInput.value === ''){
//         // Autofill start date
//         const today = new Date();
//         startDateInput.value = today.toISOString().split('T')[0];
//         alert("You didn't enter a Start Date. It will be saved as today if you add the book.");
//     }
//     else if (completeDateInput.value !== '' && startDateInput.value >= completeDateInput.value){
//         alert("The start date should be less than complete date. Please try again");

//     } else {
//         addNewRow();
//         alert("Form submitted successfully!");
//     }
// };


promptUserValidation = () => {
    // Create the array to add the prompt
    let checklist = [];

    // Check user input the title or not, if not
    // add to the checklist array
    if (titleInput.value ==='')
    {
        checklist.push('Please enter book\'s title');
    }

    // Check user input the author or not, if not
    // add to the checklist array
    if (authorInput.value === ''){
        checklist.push('Please enter author\'s name');
    }

    // Check user input the completed day or not, if not
    // add to the checklist array
    if (statusInput.value === 'Completed' && (completeDateInput.value === '')) {
        checklist.push('Please enter Complete date for Completed Books');
    }

    // Autofill start date if it's empty
    if (startDateInput.value === ''){
        const today = new Date();
        startDateInput.value = today.toISOString().split('T')[0];
    }

    // Check if start date greater than completed day
    // add to the checklist array
    if (startDateInput.value >= completeDateInput.value){
        checklist.push('The start date should be less than complete date. Please try again');
    }

    // If the checklist is null print the success alert
    // and add new row to the table
    if (checklist.length == 0)
    {
        addNewRow();
        alert("Form submitted successfully!");
        return;
    // If there array still have element inside
    // alert the user to input
    } else
    {
        alert(checklist.join('\n'));
        // Empty the checklist to check for the next time
        checklist = [];
    }
}





// Edit Row
// for (var i = 0; i < table.rows.length; i++)
// {
//     table.rows[i].onclick = function ()
//     {
//         document.getElementById('').value = this.cells[0].innerHTML; 
//     }
// }
