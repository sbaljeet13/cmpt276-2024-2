// let obj = {
//     name: "John",
//     age: 30,
// };

// console.log("Hello, I am ", obj.name, " and I am ", obj.age, " years old.");

function addElement() {
    let newElement = document.createElement('p');
    newElement.innerHTML = 'This is a new paragraph';
    document.querySelector('body').appendChild(newElement);
}

window.addEventListener('click', addElement);