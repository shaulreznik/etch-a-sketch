let containerWidth = 500; 
let itemGap = 1;
let itemWidth = 0;
let itemHeight = 0;

function createGrid (n) {
    //remove all prevoius cells
    var items = document.querySelectorAll(".item");
    for (var i = 0; i < items.length; i++) {
      items[i].remove();
    }

    itemWidth = Math.trunc((containerWidth - (n-1)*itemGap)/n);
    itemHeight = itemWidth;
    const container = document.getElementById("container");
    //container.setAttribute('width', containerWidth + 'px');
    console.log(container.style.width);
    let itemsNumber = n * n;
    for (let i = 1; i <= itemsNumber; i++) {
        var newDiv = document.createElement("div");
        newDiv.setAttribute('class', 'item');
        newDiv.setAttribute('id', i);
        newDiv.style.width = itemWidth + 'px';
        newDiv.style.height = itemHeight + 'px';
        // add event listeners
        newDiv.addEventListener("mouseover", function(event) {
            var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16)
            event.target.style.backgroundColor = randomColor;
        });
        newDiv.addEventListener("mouseout", function(event) {
        event.target.style.backgroundColor = "";
        });

        container.appendChild(newDiv);        
    }
}

createGrid (4);

// Get the submit button element
var submitButton = document.querySelector('input[type="submit"]');

// Add a click event listener to the submit button
submitButton.addEventListener("click", function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();
  
// Get the "cells" field content
var cellsField = document.getElementById("cells");
var cellsContent = cellsField.value;
  
// Do something with the "cells" field content
createGrid (cellsContent);
});