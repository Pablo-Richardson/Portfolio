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

let easterClickCount = 0;
function easterEgg()
{
    easterMessages = ["You already found the Easter Egg!","Seriously, stop clicking!","You found an Easter Egg!","This is getting ridiculous!","Okay, you win!","Just stop clicking already!","Fine, you win! Here's your prize: a virtual high-five! 🖐️","Congratulations! You are the master of Easter Eggs! 🎉","You clicked too many times, but here's a cookie 🍪 for your effort!","Are you looking for more secrets?","Persistence is key... or is it?","Still here? Impressive!","You must really like clicking.","Maybe there's another Easter Egg?","Nope, just this one.","Clicking is fun, isn't it?","You broke the record for most clicks!","Try refreshing for a surprise! (Just kidding)","You deserve a medal 🏅","Keep going, maybe something will happen.","Spoiler: Nothing new here.","You have reached click level 9000!","Achievement unlocked: Relentless Clicker","Is your finger tired yet?","You should probably stop now.","Still nothing new...","Maybe try clicking slower?","Or faster?","You are unstoppable!","Clicking champion of the world!","You found the secret... of endless messages.","Are you expecting fireworks?","Sorry, no fireworks here.","You win... again!","The button is getting dizzy.","You are a true explorer.","How many times will you click?","Infinite patience detected.","You are breaking the matrix!","404: New message not found.","You are now part of the click club.","The button appreciates your attention.","You are officially a click legend.","Is this your favorite pastime?","You could be doing anything else.","But here you are, clicking.","Maybe you should take a break?","Or not. Your choice!","You are a click superstar!","The button is running out of things to say.","You are a click wizard!","You have unlocked... nothing new.","Still going strong!","You are a click machine!","The button is impressed.","You are a click hero!","You have reached click enlightenment.","You are a click ninja!","You are a click master!","You are a click sensei!","You are a click guru!","You are a click overlord!","You are a click overlady!","You are a click overlordess!","You are a click overlordette!","You are a click overlordling!","You are a click overlordlet!","You are a click overlordlinglet!","You are a click overlordlinglette!","You are a click overlordlinglettette!","You are a click overlordlinglettettest!","You are a click overlordlinglettettestest!","You are a click overlordlinglettettestestest!",
                    "You are a click overlordlinglettettestestestest!","You are a click overlordlinglettettestestestestest!","You are a click overlordlinglettettestestestestestest!","You are a click overlordlinglettettestestestestestestest!","You are a click overlordlinglettettestestestestestestestest!","You are a click overlordlinglettettestestestestestestestestest!","You are a click overlordlinglettettestestestestestestestestestest!","You are a click overlordlinglettettestestestestestestestestestestest!","You are a click overlordlinglettettestestestestestestestestestestestest!","You are a click overlordlinglettettestestestestestestestestestestestestest!","You are a click overlordlinglettettestestestestestestestestestestestestestest!","You are a click overlordlinglettettestestestestestestestestestestestestestestest!","You are a click overlordlinglettettestestestestestestestestestestestestestestestest!","You are a click overlordlinglettettestestestestestestestestestestestestestestestestest!","You are a click overlordlinglettettestestestestestestestestestestestestestestestestestest!","You are a click overlordlinglettettestestestestestestestestestestestestestestestestestestest!","You are a click overlordlinglettettestestestestestestestestestestestestestestestestestestest!","You are a click overlordlinglettettestestestestestestestestestestestestestestestestestestestest!","You are a click overlordlinglettettestestestestestestestestestestestestestestestestestestestest!","You are a click overlordlinglettettestestestestestestestestestestestestestestestestestestestestest!","You are a click overlordlinglettettestestestestestestestestestestestestestestestestestestestestestest!","You are a click overlordlinglettettestestestestestestestestestestestestestestestestestestestestestestest!", "The button is out of messages, click again and I will no longer work"]
    easterClickCount++;
    if (easterClickCount === 5) {
        document.getElementById('easterEggButton').textContent = "You found an Easter Egg!";
    }
    else if (easterClickCount > 5) {
        document.getElementById('easterEggButton').textContent = easterMessages[easterClickCount - 6];
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

