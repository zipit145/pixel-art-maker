var colorSelector = [
    "redClass",
    "blueClass",
    "purpleClass",
    "greenClass"
]
//canvas of boxes
for (var i=0; i<10000; i++) {
    var elem = document.createElement('div');
    elem.className = "box";
    document.body.appendChild(elem);
}
//color selectors
for (var i=0; i<4; i++) {
    var colorBox = document.createElement('div');
    colorBox.classList.add("colorBox");
    colorBox.classList.add(colorSelector[i]);
    document.body.appendChild(colorBox);
}
//label tag
var label = document.createElement('label');
label.innerText = "current color is:"
document.body.appendChild(label);
//indicator box
var labelDiv = document.createElement('div');
labelDiv.classList.add("colorBoxIndicator");
labelDiv.classList.add("redClass");
document.body.appendChild(labelDiv);
var boxes = document.querySelectorAll(".box");
var indicator = document.querySelector(".colorBoxIndicator");
var currentSelection = '';
var newCurrent = "redClass";
var colorBoxes = document.querySelectorAll(".colorBox");
var defaultColor = true;
//color selection boxes events
for (var i=0; i<colorBoxes.length; i++) {
    colorBoxes[i].addEventListener("click", colorChange);
}
//Canvas events
for (var i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", selectColor);
}

function colorChange () {
    currentSelection = indicator.classList[1];
    indicator.classList.remove(currentSelection);
    currentSelection = event.target.classList[1];
    newCurrent = currentSelection;
    indicator.classList.add(currentSelection);
    defaultColor = false;
}

function selectColor () {
        event.target.classList.add(newCurrent); 
}
