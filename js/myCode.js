// Variables for the various properties used by the functions below
var position = 0;
var answer = 0;
var count = 0;
function change(direction) // Change the picture on the page, as well as its descriptive text, based on what button is clicked
{
    // Declare 3 arrays that contain the image names, descriptions, and animations
    var descriptions = new Array("Bethel Baptist Academy Logo", "Cypress College Logo", "Grand Canyon University Logo");
    var images = new Array("images/Bethel Baptist School.png", "images/Cypress College.png", "images/Grand Canyon University.png");
    var animationClass = new Array("zoomIn1", "zoomIn2", "zoomIn3");

    if (direction) // Increment the position, wrapping around to the start if at the end
    {
        if (position == 2)
        {
            position = 0;
        }
        else
        {
            position++;
        }
    }
    else // Decrement the position, wrapping around to the end if at the start
    {
        if (position == 0)
        {
            position = 2;
        }
        else
        {
            position--;
        }
    }
    // Update the image displayed, its alt text, and description text according to the position value
    document.getElementById("schoolImage").src = images[position];
    document.getElementById("schoolImage").alt = descriptions[position];
    document.getElementById("schoolImage").className = animationClass[position];
    document.getElementById("imageText").innerHTML = descriptions[position];
    
}

function uselessButton() // While this button says it's useless, clicking on it ten times will change its text
{
    count++;
    if (count == 10)
    document.getElementById("uselessButton").innerText = "Please stop clicking me!"
}

function incompleteAlert() // This alert is for the button on the about me page, and currently only displays an alert that says it is not finished. Will be replaced with a different function later on
{
    alert("This part of the website is not finished! This button is simply a placeholder where the final form will exist!");
}

function upDown(plusMinus) // changes the number used to answer the math problem in the contact me section, allowing the user to set it to any number from 0 to 9
{
    if (plusMinus) // Increment the number, wrapping around to 0 if at 9
    {
        if (answer == 9)
        {
            answer = 0;
        }
        else
        {
            answer++;
        }
    }
    else // Decrement the number, wrapping around to 9 if at 0
    {
        if (answer == 0)
        {
            answer = 9;
        }
        else
        {
            answer--;
        }
    }
    // Update answer on webpage
    document.getElementById("answer").innerHTML = answer;
}

function checkAnswer() // checks if the answer variable is the variable set here, displaying an alert that tells the user if they are correct or incorrect.
{
    if (answer == 4)
        alert("You're correct!");
    else
        alert("You're incorrect!");
}
