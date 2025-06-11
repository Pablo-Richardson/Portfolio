function toggleDarkMode() {
    const body = document.body;
    const darkModeButton = document.getElementById('darkModeButton');

    // Toggle the "dark-mode" class on the body
    body.classList.toggle('dark-mode');

    // Change the button text
    if (body.classList.contains('dark-mode')) {
        darkModeButton.textContent = 'Light Mode';
    } else {
        darkModeButton.textContent = 'Dark Mode';
    }
}

let clickCount = 1;
function changeMessage()
{
    messages = 
    [
        "Hello World!",
        "Welcome to my Portfolio"
    ]
    randNum = Math.floor(Math.random() * 10);
    if(randNum === 5)
    {
        document.getElementById('button_change_text').textContent = "You found an Easter Egg!";
    }
    else
    {
        document.getElementById('button_change_text').textContent = messages[clickCount];
    }
    clickCount ++;
    if(clickCount === messages.length)
    {
        clickCount = 0;
    }
}

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
