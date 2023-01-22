let myLibrary = [{bookname: 'BookTitle', author: 'arnold', pages: '161', read: 'Unread'},]; 
    // {bookname: 'BookTitle', author: 'arnold', pages: '161', read: 'Unread'}, 
    // {bookname: 'BookTitle', author: 'arnold', pages: '161', read: 'Unread'}, 
    // {bookname: 'BookTitle', author: 'arnold', pages: '161', read: 'Unread'}, 
    // {bookname: 'BookTitle', author: 'arnold', pages: '161', read: 'Unread'}, 
    // {bookname: 'BookTitle', author: 'arnold', pages: '161', read: 'Unread'}, 
    // {bookname: 'BookTitle', author: 'arnold', pages: '161', read: 'Unread'}, 
    // {bookname: 'BookTitle', author: 'arnold', pages: '161', read: 'Unread'}, 
    // {bookname: 'BookTitle', author: 'arnold', pages: '161', read: 'Unread'}, 
    // {bookname: 'BookTitle', author: 'arnold', pages: '161', read: 'Unread'}, 
    // {bookname: 'BookTitle', author: 'arnold', pages: '161', read: 'Unread'}, 
    // {bookname: 'BookTitle', author: 'arnold', pages: '161', read: 'Unread'}, 
    // {bookname: 'BookTitle', author: 'arnold', pages: '161', read: 'Unread'}, 
    // {bookname: 'BookTitle', author: 'arnold', pages: '161', read: 'Unread'}, 
    // {bookname: 'BookTitle', author: 'arnold', pages: '161', read: 'Unread'}, 
    // {bookname: 'BookTitle', author: 'arnold', pages: '161', read: 'Unread'}, 
    // {bookname: 'BookTitle', author: 'arnold', pages: '161', read: 'Unread'}, 
    // {bookname: 'BookTitle', author: 'arnold', pages: '161', read: 'Unread'}, 
    // {bookname: 'BookTitle', author: 'arnold', pages: '161', read: 'Unread'}, 
    // {bookname: 'BookTitle', author: 'arnold', pages: '161', read: 'Unread'}, 
    // {bookname: 'BookTitle', author: 'arnold', pages: '161', read: 'Unread'}, 
    // {bookname: 'BookTitle', author: 'arnold', pages: '161', read: 'Unread'},
    // {bookname: 'BookTitle', author: 'arnold', pages: '161', read: 'Unread'}, 
    // {bookname: 'BookTitle', author: 'arnold', pages: '161', read: 'Unread'}, 
    // {bookname: 'BookTitle', author: 'arnold', pages: '161', read: 'Unread'}, 
    // {bookname: 'BookTitle', author: 'arnold', pages: '161', read: 'Unread'}, 
    // {bookname: 'BookTitle', author: 'arnold', pages: '161', read: 'Unread'}, 
    // {bookname: 'BookTitle', author: 'arnold', pages: '161', read: 'Unread'}, 
    // {bookname: 'BookTitle', author: 'arnold', pages: '161', read: 'Unread'}, 
    // {bookname: 'BookTitle', author: 'arnold', pages: '161', read: 'Unread'}, 
    // {bookname: 'BookTitle', author: 'arnold', pages: '161', read: 'Unread'}, 
    // {bookname: 'BookTitle', author: 'arnold', pages: '161', read: 'Unread'}, 
    // {bookname: 'BookTitle', author: 'arnold', pages: '161', read: 'Unread'}, 
    // {bookname: 'BookTitle', author: 'arnold', pages: '161', read: 'Unread'}, 
    // {bookname: 'BookTitle', author: 'arnold', pages: '161', read: 'Unread'}, 
    // {bookname: 'BookTitle', author: 'arnold', pages: '161', read: 'Unread'}, 
    // {bookname: 'BookTitle', author: 'arnold', pages: '161', read: 'Unread'}, 
    // {bookname: 'BookTitle', author: 'arnold', pages: '161', read: 'Unread'}, 
    // {bookname: 'BookTitle', author: 'arnold', pages: '161', read: 'Unread'}, 
    // {bookname: 'BookTitle', author: 'arnold', pages: '161', read: 'Unread'}, 
    // {bookname: 'BookTitle', author: 'arnold', pages: '161', read: 'Unread'},
    // {bookname: 'BookTitle', author: 'arnold', pages: '161', read: 'Unread'}, 
    // {bookname: 'BookTitle', author: 'arnold', pages: '161', read: 'Unread'}, 
    // {bookname: 'BookTitle', author: 'arnold', pages: '161', read: 'Unread'}, 
    // {bookname: 'BookTitle', author: 'arnold', pages: '161', read: 'Unread'}, 
    // {bookname: 'BookTitle', author: 'arnold', pages: '161', read: 'Unread'}, 
    // {bookname: 'BookTitle', author: 'arnold', pages: '161', read: 'Unread'}, 
    // {bookname: 'BookTitle', author: 'arnold', pages: '161', read: 'Unread'}, 
    // {bookname: 'BookTitle', author: 'arnold', pages: '161', read: 'Unread'}, 
    // {bookname: 'BookTitle', author: 'arnold', pages: '161', read: 'Unread'}, 
    // {bookname: 'BookTitle', author: 'arnold', pages: '161', read: 'Unread'}, 
    // {bookname: 'BookTitle', author: 'arnold', pages: '161', read: 'Unread'}, 
    // {bookname: 'BookTitle', author: 'arnold', pages: '161', read: 'Unread'}, 
    // {bookname: 'BookTitle', author: 'arnold', pages: '161', read: 'Unread'}, 
    // {bookname: 'BookTitle', author: 'arnold', pages: '161', read: 'Unread'}, 
    // {bookname: 'BookTitle', author: 'arnold', pages: '161', read: 'Unread'},];      




    const addBookButton = document.querySelector('.addbookbutton');
const popupMenuAddBook = document.querySelector('div.popupmenu');
const mainContainer = document.querySelector('div.main');
const localPCStorage = () => {localStorage.setItem('mylibrary', JSON.stringify(myLibrary))}; //sets items in storage.
const getLocalPCStorage = () => {JSON.parse(localStorage.getItem('mylibrary'))}; //gets items from local pc storage

// if (JSON.parse(localStorage.getItem('mylibrary')) !== null){
//     myLibrary = JSON.parse(localStorage.getItem('mylibrary'));
// }

function CreateCards(book, index){

    const createDiv = document.createElement('div'); //create on document
    const createHeader = document.createElement('header');
    mainContainer.appendChild(createDiv);
    createDiv.appendChild(createHeader);

    const createDeleteButton = document.createElement('button');
    createDeleteButton.addEventListener('click', () => { 
        mainContainer.innerHTML = "";       
        myLibrary.splice(index, 1);
        console.log("wtf");
        RefreshCards();
    })
    createDeleteButton.innerText="x"; 
    createDeleteButton.style.backgroundColor = "red"; 
    createDeleteButton.className="deletebutton";
    

    const createReadButton = document.createElement('button');
    createReadButton.className="readtoggle";
    book["read"] === "Unread" ? (createReadButton.innerText = "Unread", createReadButton.style.backgroundColor = "#9d3131") : (createReadButton.innerText = "Read", createReadButton.style.backgroundColor = "rgb(80 173 78)" );
    createReadButton.addEventListener('click',() => {
        createReadButton.innerText === "Read" ? (createReadButton.innerText = "Unread", createReadButton.style.backgroundColor = "#9d3131") : (createReadButton.innerText = "Read", createReadButton.style.backgroundColor = "rgb(80 173 78)" );
    })

    createDiv.innerHTML = `<h2>${book["bookname"]}</h1>
    <h2>${book["author"]}</h2>
    <h2>${book["pages"]}</h2>`;
    createDiv.append(createReadButton);
    createDiv.append(createDeleteButton);
    localPCStorage;
    localStorage.setItem('mylibrary', JSON.stringify(myLibrary));
    console.log("test");
}

function RefreshCards(){ //Loops through list of books.
    mainContainer.innerHTML = "";
    for (let currentbookobject = 0; currentbookobject < myLibrary.length; currentbookobject++){
        const book = myLibrary[currentbookobject];
        CreateCards(book, currentbookobject);
    }
}

function bookObject(bookname, author, pages, read) {
    this.bookname = bookname;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(bookname, author, pages, read) {
    const newBook = new bookObject(bookname, author, pages, read);
    myLibrary.push(newBook);
    RefreshCards();
}

RefreshCards();



document.getElementById('myform').onsubmit = function() {//listener on form submit
    //gets bookname value. document.getElementById('bookname').value;
    const form = document.getElementById('myform');
    console.log(form.bookname.value,"form");
    const read = (form.read.checked === true ? "Read" : "Unread");
    addBookToLibrary(form.bookname.value, form.author.value, form.pages.value, read);
    form.reset();
    popupMenuAddBook.style.visibility = "hidden";//hides menu after form submit

    return false;//prevents default form sending behaviour.
};
addBookButton.onclick = function() { //onclick detects click.
    popupMenuAddBook.style.visibility = "visible";    //shows book button menu.

}





// const populateStorage = () => {
//     localStorage.setItem('library', JSON.stringify(myLibrary));
//   }

//   const getStorage = () => {
//     myLibrary = JSON.parse(localStorage.getItem('library'));