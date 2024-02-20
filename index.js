const cake = document.getElementsByClassName("cake-image");
const ageBox = document.getElementsByClassName("age-box-to-display");

let age = 0 ;

// hard coded index 0 cuz won't actually ever have more than 1 cake , so technically should have used id instead of class here
//cake[0].addEventListener("click" , addCandle);

function addCandle(){
    age = age + 1 ;
    displayAge();
}

function displayAge(){
    ageBox[0].value = age.toString();
}