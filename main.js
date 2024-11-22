const myLibrary = []

function book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book){
    myLibrary.push(book);
}



function addRowToTable(book) {
    const tableBody = document.querySelector("#libraryTable tbody");
    const newRow = document.createElement("tr");

    // Create cells for the row
    const titleCell = document.createElement("td");
    const authorCell = document.createElement("td");
    const pagesCell = document.createElement("td");
    const statusCell = document.createElement("td");
    const deleteCell = document.createElement("td");

    const deletebutton = document.createElement('Button');
    deletebutton.id = "deletebutton";
    deletebutton.innerHTML = "Delete";
    // Fill the cells with book data
    titleCell.textContent = book.title;
    authorCell.textContent = book.author;
    pagesCell.textContent = book.pages;
    statusCell.textContent = book.read;
    deleteCell.appendChild(deletebutton);

    deletebutton.addEventListener('click',function(){
        const row = this.closest('tr');
        if(row){
            row.remove();
        }
    })

    // Append cells to the row
    newRow.appendChild(titleCell);
    newRow.appendChild(authorCell);
    newRow.appendChild(pagesCell);
    newRow.appendChild(statusCell);
    newRow.appendChild(deleteCell);

    // Append the row to the table body
    tableBody.appendChild(newRow);
}

document.getElementById("addbook").addEventListener("click", () => {

    const title = prompt("Enter the Title: ");
    const author = prompt("Enter the Author's Name: ");
    const pages = prompt("Enter the no.of pages: ");
    const status = prompt("Enter the Status: ");

    const newBook = new book(title,author,pages,status);
    addBookToLibrary(newBook);


    addRowToTable(newBook);
});


