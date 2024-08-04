//background changer
var buttons = document.querySelectorAll("button");

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        var computedStyle = window.getComputedStyle(this);
        document.querySelector("body").style.backgroundColor = computedStyle.backgroundColor;
    });
}
