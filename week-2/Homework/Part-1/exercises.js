/**
 *
 * For each of the names in the array passed into this function
 *
 * - Add a <h1> tag to the website containing the name of the person
 * - Add a <h2> tag to the website containing the job of the person
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 * <div id="content">
 *      <h1>{Name Here}</h1>
 *      <h2>{Job Here}</h2>
 *      .....
 * </div>
 */
function exerciseOne(arrayOfPeople) {
  let content = document.querySelector("#content");
//console.log(arrayOfPeople);
  arrayOfPeople.forEach(person => {
    const {name,job} = person
    content.appendChild(document.createElement("h1")).textContent = name
    content.appendChild(document.createElement("h2")).textContent = job
  });
}

/**
 *
 * Create a list of shopping items. You should use an unordered list.
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 */
function exerciseTwo(shoppingItems) {
  //Write your code in here
  const content = document.querySelector("#content");
  const listEl = document.createElement("ul")
  content.appendChild(listEl)

  shoppingItems.forEach(item => {
    const itemEl = document.createElement("li")
    itemEl.textContent = item
    listEl.appendChild(itemEl)
  })

  }

/**
    I'd like to display my three favorite books inside a nice webpage!

    const books = [
        {
            title: "The Design of Everyday Things",
            author: "Don Norman",
            alreadyRead: false
        },
        {
            title: "The Most Human Human",
            author: "Brian Christian",
            alreadyRead: true
        },
        {
            title: "The Pragmatic Programmer",
            author: "Andrew Hunt",
            alreadyRead: true
        }
    ];

    Iterate through the array of books.
    - For each book, create a <p> element with the book title and author and append it to the page.
    - Use a <ul> and <li> to display the books.
    - Add an <img> to each book that links to a URL of the book cover.
    - Change the style of the book depending on whether you have read it (green) or not (red).

    The end result should look something like this: https://hyf-js2-week1-makeme-ex1-demo.herokuapp.com/
**/
function exerciseThree(books) {
 //Write your code in here
 let list = document.createElement("ul");
 list.classList.add("book-cards")
 books.forEach(book => {
   let aBook = document.createElement("p")
   aBook.textContent = book.title + " - " + book.author

   let listItem = document.createElement("li");
   listItem.classList.add("book-card")
   listItem.appendChild(aBook)
   list.appendChild(listItem)
   document.body.appendChild(list)

   let bookImg = document.createElement("img")
   bookImg.classList.add("book-img")
   bookImg.src = book.bookCover;


   listItem.appendChild(bookImg)


   if(book.alreadyRead === true) {
     listItem.style.backgroundColor = "green"
   } else {
     listItem.style.backgroundColor = "tomato"
   }
 });
}


//
//
//
//
// DO NOT EDIT BELOW HERE
//
//
//
//

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" }
];

exerciseOne(people);

let shopping = ["Milk", "Break", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

exerciseTwo(shopping);

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true
  }
];

exerciseThree(books);
