const ageBox = document.getElementById("age-box-to-display");
//const cake = document.getElementById("cake-image").contentDocument;
let age = 0 ;

// hard coded index 0 cuz won't actually ever have more than 1 cake , so technically should have used id instead of class here
//cake[0].addEventListener("click" , addCandle);

function addCandle(){
    age = age + 1 ;
    displayAge();
}

function displayAge(){
    ageBox.value = age.toString();
}