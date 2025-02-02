function createTable() {
    //Write your code here
    let table = document.getElementById("myTable");
    
    // Clear the table before creating a new one
    table.innerHTML = "";
    
    // Prompt the user for number of rows and columns
    let rn = parseInt(prompt("Input number of rows"));
    let cn = parseInt(prompt("Input number of columns"));
    
    // Validate input
    if (isNaN(rn) || isNaN(cn) || rn <= 0 || cn <= 0) {
        alert("Please enter valid positive numbers for rows and columns.");
        return;
    }
    
    // Create rows and columns dynamically
    for (let i = 0; i < rn; i++) {
        let row = table.insertRow(); // Create a new row
        for (let j = 0; j < cn; j++) {
            let cell = row.insertCell(); // Create a new cell in the row
            cell.textContent = `Row-${i} Column-${j}`; // Set text content
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("input[type='button']").addEventListener("click", createTable);
});

}
