const ageBox = document.getElementById("age-box-to-display");
const cake = document.getElementById("cake");
let age = 0 ;

// hard coded index 0 cuz won't actually ever have more than 1 cake , so technically should have used id instead of class here
//cake[0].addEventListener("click" , addCandle);

function addCandle(){
    //add a restriction, find number corresponding to max candle amount
    age = age + 1 ;
    displayAge();
    CreateCandle();
}

function displayAge(){
    ageBox.value = age.toString();
}


function CreateCandle() {
    //for maitenance ?
    const xmlns = "http://www.w3.org/2000/svg";
    const boxWidth = 12;
    const boxHeight = 18;


    const candle = document.createElementNS(xmlns, "svg");
    candle.setAttributeNS(null, "viewBox", "0 0 " + boxWidth + " " + boxHeight);
    candle.setAttributeNS(null, "width", boxWidth);
    candle.setAttributeNS(null, "height", boxHeight);
    candle.style.display = "block";

    // now we just hardcode the candle_small svg over here :):

    const top = document.createElementNS(xmlns , "ellipse");
    top.setAttribute(null , "cx" ,"6" );
    top.setAttribute(null , "cy" ,"14.5385" );
    top.setAttribute(null , "rx" ,"6" );
    top.setAttribute(null , "ry" ,"3.46154" );
    top.setAttribute(null , "fill" , "3.46154", "url(#paint0_linear_39_2)" );


    const lateral = document.createElementNS(xmlns , "rect");
    lateral.setAttributeNS(null ,"y", "3.46155" );
    lateral.setAttributeNS(null ,"width", "12" );
    lateral.setAttributeNS(null ,"height", "11.3077" );
    lateral.setAttributeNS(null , "fill" , "url(#paint0_linear_39_2)" )

    const path = document.createElementNS(xmlns , "path");
    path.setAttributeNS(null , "d" , "M11.5 3.46154C11.5 4.16297 11.0031 4.89326 9.99278 5.47612C8.99574 6.05134 7.58517 6.42308 6 6.42308C4.41483 6.42308 3.00426 6.05134 2.00722 5.47612C0.996926 4.89326 0.5 4.16297 0.5 3.46154C0.5 2.76011 0.996926 2.02982 2.00722 1.44695C3.00426 0.871741 4.41483 0.5 6 0.5C7.58517 0.5 8.99574 0.871741 9.99278 1.44695C11.0031 2.02982 11.5 2.76011 11.5 3.46154Z" );
    path.setAttributeNS ( null , "fill" ,"#2AEE9C" );
    path.setAttributeNS( null ,"stroke" , "white" );


    const grad = document.createElementNS(xmlns , "linearGradient");
    grad.setAttributeNS(null , "id" , "paint0_linear_39_2");
    grad.setAttributeNS(null , "x1" , "6");
    grad.setAttributeNS(null , "y1" , "3.46155");
    grad.setAttributeNS(null , "x2" , "6");
    grad.setAttributeNS(null , "y2" , "10.9615");
    grad.setAttributeNS(null , "gradientUnits" , "userSpaceOnUse");

    const subgrad1 = document.createElementNS( xmlns , "stop");
    subgrad1.setAttributeNS(null , "stop-color" , "#5AF2B2" );



    const subgrad2 = document.createElementNS( xmlns , "stop");
    subgrad2.setAttributeNS(null , "offset" , "1");
    subgrad2.setAttributeNS(null , "stop-color" , "#12E28B" );



    //nesting everything corretly,, might need to reverse order of execution, from outside to inside
    //also make sure that when adding the candle to the svg , it's contained within a group within a class/id for later usage
    
    const candleGroup = document.createElementNS(xmlns ,"g");
    candleGroup.setAttributeNS(null, "class" , "candle");

    const defs = document.createElementNS(xmlns ,"defs");

    grad.appendChild(subgrad1);
    grad.appendChild(subgrad2);
    defs.appendChild(grad);
    
    candleGroup.appendChild(top);
    candleGroup.appendChild(lateral);
    candleGroup.appendChild(path);
    candleGroup.appendChild(defs);

    candle.appendChild(candleGroup);

    //need to posittion properly now
    //positionCandle();
    cake_undecorated.appendChild(candle);

    //add animation later on 

}


function positionCandleI(){
    
}