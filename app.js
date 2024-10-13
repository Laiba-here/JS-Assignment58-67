//        .... QUESTION 1 ....
        // let mainContent = document.getElementById('main-content');
        // console.log(mainContent); 
        // let mainContentChildren = mainContent.children;
        // console.log("Child elements of 'main-content':");
        // for (let i = 0; i < mainContentChildren.length; i++) {
        //     console.log(mainContentChildren[i]);
        // }

        // let renderElements = document.getElementsByClassName('render');
        // for (let i = 0; i < renderElements.length; i++) {
        //     document.write(renderElements[i].innerHTML + '<br>');
        // }
        // document.getElementById('first-name').value = "Alex";
        // document.getElementById('last-name').value = "Bank";
        // document.getElementById('Email').value = "alexbank@example.com";


//       .... QUESTION 2 ....
let formContent = document.getElementById('form-content');
console.log("Node type of 'form-content':", formContent.nodeType); // Node type of 'form-content'

// 2. Show node type of element having id "last-name" and its child node.
let lastNameInput = document.getElementById('last-name');
console.log("Node type of 'last-name' input:", lastNameInput.nodeType); // Node type of input with id 'last-name'
console.log("Child node of 'last-name' input:", lastNameInput.childNodes); // Child nodes of input 'last-name'

// 3. Update child node of element having id "lastName".
let lastNameParagraph = document.getElementById('lastName');
lastNameParagraph.textContent = "Last Name : Doe"; // Update child node content
console.log("Updated lastName content:", lastNameParagraph.textContent);

// 4. Get the first and last child of the element with id "main-content".
let mainContent = document.getElementById('main-content');
console.log("First child of 'main-content':", mainContent.firstChild); // First child
console.log("Last child of 'main-content':", mainContent.lastChild); // Last child

// 5. Get the next and previous sibling of the element with id "last-name".
let lastNameSibling = document.getElementById('last-name');
console.log("Next sibling of 'last-name':", lastNameSibling.nextElementSibling); // Next sibling
console.log("Previous sibling of 'last-name':", lastNameSibling.previousElementSibling); // Previous sibling

// 6. Get the parent node & node type of the element having id "email".
let emailInput = document.getElementById('Email');
console.log("Parent node of 'email':", emailInput.parentNode); // Parent node of 'email'
console.log("Node type of 'email':", emailInput.nodeType);


