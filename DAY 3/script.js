document.addEventListener('DOMContentLoaded', function() {
    const addListenersButton = document.getElementById('addListenersButton');
    const handlerButton = document.getElementById('handlerButton');
    const handlerInput = document.getElementById('handlerInput');
    const output = document.getElementById('output');

    // Event listener for adding all event listeners
    addListenersButton.addEventListener('click', function() {
        handlerButton.addEventListener('click', handleButtonClick);
        handlerButton.addEventListener('dblclick', handleButtonDblClick);
        handlerButton.addEventListener('mouseover', handleButtonMouseOver);
        handlerButton.addEventListener('mouseout', handleButtonMouseOut);
        handlerInput.addEventListener('focus', handleInputFocus);
        handlerInput.addEventListener('blur', handleInputBlur);
        handlerInput.addEventListener('input', handleInputChange);
        handlerInput.addEventListener('keydown', handleInputKeyDown);
        handlerInput.addEventListener('keyup', handleInputKeyUp);

        output.textContent = 'Event listeners added!';
    });

    // Event handler functions
    window.handleButtonClick = function() {
        output.textContent = 'Button was clicked!';
    };

    window.handleButtonDblClick = function() {
        output.textContent = 'Button was double clicked!';
    };

    window.handleButtonMouseOver = function() {
        handlerButton.style.backgroundColor = '#4CAF50';
    };

    window.handleButtonMouseOut = function() {
        handlerButton.style.backgroundColor = '';
    };

    window.handleInputFocus = function() {
        handlerInput.style.backgroundColor = '#e0f7fa';
    };

    window.handleInputBlur = function() {
        handlerInput.style.backgroundColor = '';
    };

    window.handleInputChange = function() {
        output.textContent = 'Input changed to: ' + handlerInput.value;
    };

    window.handleInputKeyDown = function(event) {
        output.textContent = 'Key pressed: ' + event.key;
    };

    window.handleInputKeyUp = function(event) {
        output.textContent = 'Key released: ' + event.key;
    };
});
