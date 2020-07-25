//variables
var play = false;
var score = 0;
var time = 60;
var action;
var correctAns;


document.getElementById("set").onclick = function(){

    //checking if playing or not
    if (play == true){
        location.reload();
    }
    else{
        play = true;
        //resetting value of score
        score = 0;

        //displays score
        document.getElementById("scoreValue").innerHTML = score;

        //displays timer
        document.getElementById("time").style.display = "block";
        time = 60;
        
        //changing button 
        document.getElementById("set").innerHTML = "Reset Game";

        //countdown
        startCountDown();
        generateQA(); 
        
    }
}

//checking

for(i=1;i<5;i++){
    
    document.getElementById("box"+ i).onclick = function(){
        if (play == true){
            //corrext ans
            if(this.innerHTML == correctAns){

                //increasing score
                score++;
                document.getElementById("scoreValue").innerHTML = score;
                
                //displaying correct message
                document.getElementById("correct").style.display ="block";
                setTimeout(function(){
                    document.getElementById("correct").style.display ="none";
                },1000);
    
                //generate new question
                generateQA();
            }
    
            else{
                //displaying incorrect message
                document.getElementById("wrong").style.display ="block";
                setTimeout(function(){
                    document.getElementById("wrong").style.display ="none";
                },1000);
            }
        }
    
    }

}



//FUNCTIONS
function startCountDown(){
    action = setInterval(function(){
        time -= 1;
        document.getElementById("timeRemaining").innerHTML = time;
        if(time == 0)
        {
            stopCountDown();  //stop countdown
            //show
            document.getElementById("gameOver").style.display = "block";
            document.getElementById("gameOver").innerHTML = "<p> Game Over</p><p>Your score is " + score +".</p>";

            //hide
            document.getElementById("time").style.display ="none";
            document.getElementById("correct").style.display ="none";
            document.getElementById("wrong").style.display ="none";

            playing = false;
            //document.getElementById("set").innerHTML = "Start Game";

        }
    },1000);      
    

}


function stopCountDown(){
    clearInterval(action);
}


function generateQA()
{
    var x = 1+Math.round(9* Math.random());
    var y = 1+Math.round(9* Math.random());
    correctAns = x*y;

    //displaying question
    document.getElementById("question").innerHTML = x + " X " + y;

    //correct ans position
    var correctPos = 1+ Math.round(Math.random()*3);
    document.getElementById("box"+correctPos).innerHTML = correctAns;

    //other boxes
    //array to store all ans
    var answers = [correctAns];

    for(i=1; i<5; i++){
        if (i != correctPos){
            var wrongAns;
            do{
            wrongAns = 1+Math.round(9* Math.random()) * 1+Math.round(9* Math.random());
            
            }
            while (answers.indexOf(wrongAns) > -1)

            document.getElementById("box"+i).innerHTML = wrongAns;
            answers.push(wrongAns);   //adding in array
        }

    }
}
