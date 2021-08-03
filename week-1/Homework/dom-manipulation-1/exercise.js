/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/

   const pElement = document.querySelectorAll("p");
 console.log(pElement);
 
 const firstDivElement = document.querySelector("div");
 console.log(firstDivElement);
 
 const jumbotron = document.getElementById("#jumbotron-text");
 console.log(jumbotron);

 const pl = document.querySelectorAll(".primary-content p")
 console.log(pl);  

    




/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
const alertBtn = document.getElementById("alertBtn");
alertBtn.addEventListener('click', () => {
    alert("Thanks for visiting Bikes for Refugees!");
})






/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
const changeBckColor = document.getElementById("bgrChangeBtn");
changeBckColor.addEventListener('click', () => {
    document.body.classList.toggle("site-filter");
    
})


/*
Task 4
======

When a user clicks the ‘Add some text’ button, a new paragraph should be added inside the section that says “LEARN MORE”
*/
const newText = document.getElementById("addTextBtn");
const addP = () => {
    const newP = document.createElement("p");
    newP.textContent = "Giving is living"
    const learnSection = document.querySelector("#mainArticles");
    learnSection.prepend(newP)
}
newText.addEventListener('click', addP);



/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
const largBtn = document.getElementById("largerLinksBtn");

largBtn.addEventListener('click', () => {
    const incSize = document.getElementsByTagName("a");
    console.log(incSize)
    for (let i = 0; i < incSize.length; i ++) {
        incSize[i].style.fontSize = "30px"
    }
})


/*
Task 6
======

Using the same function in Task 4,
When the 'Add' button is clicked, get the text inside the input field and create a new paragraph in the "LEARN MORE" section
Also clear the text inside the input field
*/
const addBtn = document.getElementById("addArticleBtn");
addBtn.addEventListener('click', () => {
    const inputText = document.getElementById("input-p");
    const newP = document.createElement("p");
    newP.textContent = inputText.value;
    const learnSection = document.querySelector("#mainArticles");
    learnSection.appendChild(newP)
    inputText.value = ""    
})

/*
Task 7
======

Create an array of 5 different colors.
Using the same function in Task 3, every time the 'Change colour' button is clicked, the background color will be changed with the next color in the array.
The next color when you are in the last color of the array will be the first color again.
*/
const colors = []; 


