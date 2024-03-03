//on website load
const ageBox = document.getElementById("age-box-to-display");
const cake = document.getElementById("cake");
let age = 0 ;
microfono() ;

// hard coded index 0 cuz won't actually ever have more than 1 cake , so technically should have used id instead of class here
//cake[0].addEventListener("click" , addCandle);

function addCandle(){
    //add a restriction, find number corresponding to max candle amount
    age = age + 1 ;
    displayAge();
    CreateCandle();
    positionCandle(/*something*/);
    animateCandle(/*something */);
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
    top.setAttributeNS(null , "cx" ,"6" );
    top.setAttributeNS(null , "cy" ,"14.5385" );
    top.setAttributeNS(null , "rx" ,"6" );
    top.setAttributeNS(null , "ry" ,"3.46154" );
    top.setAttributeNS(null , "fill" , "#12E28B" );


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

    //candle.appendChild(candleGroup);

    //for testing purpose
    candleGroup.setAttributeNS(null , "onclick" , "removeCandle()");


    //need to posittion properly now
    const cakeFrame = document.getElementById("Frame-3");
    positionCandle(candleGroup);
    cakeFrame.appendChild(candleGroup);

    //add animation later on 

}


function positionCandle(candle){
    //for now hardcode those values

    //range y position
    
    // max and min coordinates of cake's top layer minus height of the candle, cuz origin top left with y growing downward
    const ymax = (52.5 + 34.5) - 18 -6;
    const ymin = (52.5 - 34.5) - 18 +6 ;
    
    const ypos = Math.floor(Math.random() * (ymax - ymin + 1) ) + ymin;

    //range of x position (in function of y )

    // -> isolate x in ellipse formula
    let xmax = Math.sqrt((115**2)* (1- (((ypos - 34.5)**2)/(34.5**2)))) + 115-12;
    let xmin = 115 - 12 - (Math.sqrt((115**2)* (1- (((ypos - 34.5)**2)/(34.5**2))))) ;

    //correction/offset by substracting / adding circle base  times arbitraty multiplier for styling
    //avoids candle dangling on the edge
    xmax = xmax -12*1.4;
    xmin = xmin +12*2 ;

    const xpos = Math.floor(Math.random() * (xmax - xmin + 1) ) + xmin;

    
    //finally translating horizontally and vertically the candle to be in the desired spot
    candle.setAttributeNS(null, "transform", "translate(" + xpos +"," + ypos + ")" )

}

function removeCandle(){
    /*check if there are candle to remove 
    might need to ry and cath errors, or smth 
    
    then randomly select one or just pick the first one in the list - depending on how it looks on the site
    like are the first candles never blown, is it obious the canldes are getting blown in order of appeareance or revers order ? etc...



    element.remove();
    */

    //might fail initialisation if no candles,  

    const candlesArray = document.getElementsByClassName("candle");
    
    if ( candlesArray.length !== 0){
      candlesArray[0].remove();
      age = age - 1;
      displayAge();
    }
    
}

function microfono(){
    navigator.mediaDevices.getUserMedia({ audio: true }).then(function(stream) {
        audioContext = new AudioContext();
        analyser = audioContext.createAnalyser();
        microphone = audioContext.createMediaStreamSource(stream);
        javascriptNode = audioContext.createScriptProcessor(2048, 1, 1);
        analyser.smoothingTimeConstant = 0.8;
        analyser.fftSize = 1024;
        microphone.connect(analyser);
        analyser.connect(javascriptNode);
        javascriptNode.connect(audioContext.destination);
        javascriptNode.onaudioprocess = function() {
            var array = new Uint8Array(analyser.frequencyBinCount);
            analyser.getByteFrequencyData(array);
            var values = 0;
      
            var length = array.length;
            for (var i = 0; i < length; i++) {
              values += (array[i]);
            }
      
            var average = values / length;
      
            if(Math.round(average)>15)
            {
              console.log(Math.round(average));
              //document.getElementById("lvl").innerHTML = Math.round(average)-10;
              removeCandle();
            }
          
        }
        })
        .catch(function(err) {
          /* handle the error */
      });
}
