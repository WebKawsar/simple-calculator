
/******************************************Incomplete ***********************************/

var screen = document.getElementById("screen");
var buttons = document.querySelectorAll("button");
let screenValue = "";

for (let i = 0; i < buttons.length; i++) {

    const element = buttons[i];
    
    element.addEventListener("click", function(event){
        
        buttonText = event.target.innerText;

        if(buttonText == "X"){
            buttonText = "*";
            screenValue = screenValue + buttonText;
            screen.value = screenValue;
        }
        else if(buttonText == "C"){

            screenValue = "";
            screen.value = screenValue;
        }
        else if(buttonText == "="){
            screen.value = eval(screenValue);
        }
        else {
            screenValue  = screenValue + buttonText;
            screen.value = screenValue;
        }











        // getValue = event.target.innerText;

        // if(getValue==0 || getValue==1 || getValue==2 || getValue==3 || getValue==4 || getValue==5 || getValue==6 || getValue==7 || getValue==8 || getValue==9){

        //         getResultValue = document.getElementById("result").innerText;
        //         setValue = getResultValue + getValue;
        //         document.getElementById("result").innerText = setValue;

        // }
        
        // if(getValue=== "+" || getValue=== "-" || getValue=== "*" || getValue=== "/"){

        //         getResultValue = document.getElementById("result").innerText;
        //         setValue = getResultValue + getValue;
        //         document.getElementById("result").innerText = setValue;

        // }

        
    });

    
}



