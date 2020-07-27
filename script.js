
/***********************************************************************************
 *                               Simple Calculator Complete 
 * *********************************************************************************/

var screen = document.getElementById("screen");
var buttons = document.querySelectorAll("button");
let screenValue = "";

for (let i = 0; i < buttons.length; i++) {

    const element = buttons[i];

    element.addEventListener("click", function (event) {

        buttonText = event.target.innerText;

        if (buttonText == "X") {

            buttonText = "*";
            screenValue = screenValue + buttonText;
            screen.value = screenValue;

        }
        else if (buttonText == "C") {

            screenValue = "";
            screen.value = screenValue;

        }
        else if (buttonText == "=") {
            screen.value = eval(screenValue);
        }
        else {

            screenValue = screenValue + buttonText;
            screen.value = screenValue;

        }

    });

}



